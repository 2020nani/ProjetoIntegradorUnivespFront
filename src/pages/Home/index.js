import React from 'react';
import Header from '../../components/Header';
import { Container } from './style';

export default function Home() {
  return (
    console.log('ola'),
    (
      <Container theme="escuro">
        <Header />
        <div>
          <h1>home</h1>
        </div>
      </Container>
    )
  );
}
