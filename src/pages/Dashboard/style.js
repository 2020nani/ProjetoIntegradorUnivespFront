import styled from 'styled-components';
export const Container = styled.div`
background: ${function (props) { 
  let color = ""
  props.theme == "escuro" ? color = "rgb(28, 12, 63)" : color = "white" 
  return color } };
width:100vw;
display:flex;
flex-direction:column;
margin:0;

`
