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

        <div className='min-h-screen flex relative lg:static surface-0'>
          <Menu />
          <div className='min-h-screen flex flex-column relative flex-auto p-8'>
            <Routes>
              <Route path="/" element={<Main />}></Route>
            </Routes>
          </div>
        </div>

			</BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;