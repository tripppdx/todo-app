// import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import LoginContext from './context/auth/context';

function Main() {
  return (
    <LoginContext>
      <App />
    </LoginContext>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
