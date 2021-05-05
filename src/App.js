import React from 'react'
import Header from './components/header';
import { GlobalStyles } from './global';
import Contato from './pages/contato';

function App() {
  return (
    <>
    <GlobalStyles />
    <Header/>
    <Contato/>
    </>
  )
}

export default App;
