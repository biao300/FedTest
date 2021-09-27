import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './index.css';
import CardGrid from './components/CardGrid.jsx';
import './styles/CardGrid.css';

ReactDOM.render(
  <React.StrictMode>
    <CardGrid />
  </React.StrictMode>,
  document.getElementById('root')
);