import styled from 'styled-components';

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, #FF0000 0%, #FFA500 16.67%, #FFFF00 33.33%, #008000 50%, #0000FF 66.67%, #800080 83.33%);
  border-image-slice: 1;
  height: 20px;
  width: 100%;
  color: ${props => (props.gameOver ? 'red' : '#999')};
  background: #000;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
