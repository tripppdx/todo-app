import React from 'react';

import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings/context';
import '@blueprintjs/core/lib/css/blueprint.css';
import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginContext from './context/auth/context';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Login />
        <Auth capability="read">
          <SettingsProvider>
            <ToDo />
          </SettingsProvider>
        </Auth>
      </>
    );
  }
}
