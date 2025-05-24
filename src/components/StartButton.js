import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  box-sizing: border-box;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  height: 20px;
  width: 100%;
  border: 4px solid transparent;
  border-image: linear-gradient(135deg, #FF0000 0%, #FFA500 16.67%, #FFFF00 33.33%, #008000 50%, #0000FF 66.67%, #800080 83.33%);
  border-image-slice: 1;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
