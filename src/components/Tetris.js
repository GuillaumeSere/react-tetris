import React, { useEffect, useRef, useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [touchStartY, setTouchStartY] = useState(null);
    const [touchEndY, setTouchEndY] = useState(null);


    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
        rowsCleared
    );

    const tetrisWrapperRef = useRef(null);

    useEffect(() => {
        if (tetrisWrapperRef.current) {
            tetrisWrapperRef.current.addEventListener('touchstart', handleTouchStart);
            tetrisWrapperRef.current.addEventListener('touchend', handleTouchEnd);
        }

        return () => {
            if (tetrisWrapperRef.current) {
                tetrisWrapperRef.current.removeEventListener('touchstart', handleTouchStart);
                tetrisWrapperRef.current.removeEventListener('touchend', handleTouchEnd);
            }
        };
    }, [tetrisWrapperRef.current]);

    const movePlayer = dir => {
        if (!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 });
        }
    };

    const startGame = () => {
        // Reset everything
        setStage(createStage());
        setDropTime(1000);
        resetPlayer();
        setScore(0);
        setLevel(0);
        setRows(0);
        setGameOver(false);
    };

    const drop = () => {
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }

        if (!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x: 0, y: 1, collided: false });
        } else {
            // Game over!
            if (player.pos.y < 1) {
                console.log('GAME OVER!!!');
                setGameOver(true);
                setDropTime(null);
            }
            updatePlayerPos({ x: 0, y: 0, collided: true });
        }
    };

    const dropPlayer = () => {
        // We don't need to run the interval when we use the arrow down to
        // move the tetromino downwards. So deactivate it for now.
        setDropTime(null);
        drop();
    };

    // This one starts the game
    // Custom hook by Dan Abramov
    useInterval(() => {
        drop();
    }, dropTime);

    const move = ({ keyCode }) => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                dropPlayer();
            } else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    };

    const keyUp = ({ keyCode }) => {
        if (!gameOver) {
            // Activate the interval again when user releases down arrow.
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1));
            }
        }
    };

    const handleTouchStart = event => {
        setTouchStartY(event.touches[0].clientY);
      };

    const handleTouchMove = (event) => {
        setTouchStartY(event.touches[0].clientY);
    };

    const handleTouchEnd = event => {
        setTouchEndY(event.changedTouches[0].clientY);
        const deltaY = touchEndY - touchStartY;
    
        if (deltaY > 0) {
          dropPlayer();
        } else if (deltaY < 0) {
          playerRotate(stage, 1);
        }
      };

    return (
        <StyledTetrisWrapper
            role="button"
            tabIndex="0"
            onKeyDown={e => move(e)}
            onKeyUp={keyUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`rows: ${rows}`} />
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
