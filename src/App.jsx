import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Main from './pages/Main';
import Login from './pages/Login';
import styled from 'styled-components';

const App = () => {

  const C = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100vh;
  `;

  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <GlobalStyles />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<C><Login /></C>}></Route>
        </Routes>
          
			</BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;