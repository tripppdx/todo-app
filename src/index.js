import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
import LoginContext from './context/auth/context';

class Main extends React.Component {
  render() {
    return (
      <LoginContext>
        <App />
      </LoginContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
