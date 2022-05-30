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
a:{
  text-decoration: none;
  color: black
}
a:hover {
  text-decoration: underline;
  color: blue
  transiction-color: 100ms
}

`;

export const ContainerGrid = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  img {
    width: 25%;
  }
  @media (max-width: 650px) {
    display: none;
  }
`;

export const ContainerGridMenu = styled.div`
  width: 90vw;
  display: none;
  justify-content: space-between;
  @media (max-width: 650px) {
    display: flex;
    margin-top: 5px;
    img {
      width: 30%;
    }
  }
`;
export const ContainerGridConteudo = styled.div`
  flex: ${props => props.size}
  align-items: center;
  display: flex;
  justify-content: ${props => props.align};
`;
