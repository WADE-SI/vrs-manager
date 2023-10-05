import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';

// GlobalStyles
import GlobalStyles from './GlobalStyles';

// pages
import Main from './pages/Main';

// Components
import Menu from './components/Menu';

const App = () => {

  return (
    <PrimeReactProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
          
			</BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;