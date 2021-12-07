import ToDo from './components/todo/todo.js';
import SettingsProvider from './context/settings/context';
import '@blueprintjs/core/lib/css/blueprint.css';
import Auth from './components/auth/auth';
import Login from './components/auth/login';
import LoginContext from './context/auth/context';

function App() {
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

export default App;
