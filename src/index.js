import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //import possibile perchè dentro App.js ho l'export
import reportWebVitals from './reportWebVitals';


//inietto App.js nella pag html, nel div, in quell'elemento della pagina che ha come id -> root
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
);

//in ReactDOM.rende, richiamo il componente App  come fosse un tag html

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
