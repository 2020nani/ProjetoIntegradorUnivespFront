import styled from 'styled-components';

export const Container = styled.div`
  background-color: #0e0a14ef;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  transition: 600ms;
`;

export const Conteudo = styled.div`
  background-color: white;
  width: 80%;
  height: 70%;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  table {
    align-self: center;
  }
  th,
  td {
    width: 20vw;
    border: 1px solid black;
    text-align: center;
    tr:hover {
      background-color: #d6eeee;
    }
  }
  button {
    margin: 10px 0;
    align-self: center;
    width: 20vw;
    border-radius: 20px;
  }
  h1 {
    font-size: 4vw;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
`;
