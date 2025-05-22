import styled from 'styled-components';
// BG Image
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  position: relative;
`;

export const StyledTitle = styled.h1`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-align: center;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  
  @media (max-width: 712px) {
    font-size: 2rem;
    top: 10px;
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
 margin-top: 50px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

  @media (max-width: 712px) {
    flex-direction: column;
    margin-top: 60px;

    aside {
      margin-top: 1rem;
    }
  }
`;

