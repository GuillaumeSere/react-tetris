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
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 10;
  text-align: center;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  color: transparent;
  background: linear-gradient(135deg, #FF0000 0%, #FFA500 16.67%, #FFFF00 33.33%, #008000 50%, #0000FF 66.67%, #800080 83.33%);
  background-size: 100% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
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

