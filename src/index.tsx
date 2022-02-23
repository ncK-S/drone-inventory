import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Dashboard, Signin } from './components';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/styles'
import './styles.css';
import { theme } from './Theme/themes'


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <Router>
        <Routes>
          <Route path='/' element={<Home title={'Ranger Drones'} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
