import styled from 'styled-components';
// BG Image
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`;

export const StyledTetris = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }


  @media (max-width: 712px){
    flex-direction:column;

  aside {
    margin-top: 1rem;
  }
  }
`;

