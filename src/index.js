import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardHtml from "./Components/Card";
import AreaTexto from "./Components/AreaTexto";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alerta from './Components/Alerta';
import Contenedor from './Components/Contenedor';
import FichaRickAndMorty from './Components/FichaRickAndMorty';
import ContenedorRickAndMorty from './Components/ContenedorRickAndMorty';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <ContenedorRickAndMorty></ContenedorRickAndMorty>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
