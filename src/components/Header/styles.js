import styled from 'styled-components';

export const Container = styled.div`
width:100vw;
margin:0;
height:14vh;
background: white;
display:flex;
justify-content:center;
align-items:center
font-family: Arial, Helvetica, sans-serif;
`;

export const ContainerGrid = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;
export const ContainerGridConteudo = styled.div`
  flex: ${props => props.size}
  align-items: center;
  display: flex;
  justify-content: ${props => props.align};
`;
