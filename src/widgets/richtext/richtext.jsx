import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => <p className='app-title'>App</p>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app_widget')
);
