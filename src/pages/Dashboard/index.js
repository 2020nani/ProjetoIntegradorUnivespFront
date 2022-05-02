import React, { useState } from 'react';
import Header from '../../components/Header';
import Aula from '../../components/Aula';
import CadastraModulo from '../../components/CadastraModulo';
import CadastraAula from '../../components/CadastraAula';
import { Container } from './style';
export default function Dashboard() {

  const [background, setBackground] = useState("escuro")
  const [route, setRoute] = useState("Aula");

  return (

    <Container theme = {background}>
      <Header 
      route={route} 
      setRoute={setRoute}
      background={background}
      setBackground={setBackground}/>
      {route === "Aula" ? <Aula background={background}/> : 
       route === "CadastraModulo" ? <CadastraModulo background = {background} setRoute={setRoute}></CadastraModulo>
      : route === "CadastraAula" ? <CadastraAula background = {background} setRoute={setRoute}></CadastraAula>
      : <div></div> }
      
    </Container>
  );

}