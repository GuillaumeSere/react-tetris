import styled from 'styled-components';

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(25vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, #FF0000 0%, #FFA500 16.67%, #FFFF00 33.33%, #008000 50%, #0000FF 66.67%, #800080 83.33%);
  border-image-slice: 1;
  width: 100%;
  max-width: 25vw;
  background: #111;

  @media (max-width: 712px){
    display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(50vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 100%;
  max-width: 50vw;
  background: #111;
  }
`;
