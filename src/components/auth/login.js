import { useState, useContext } from 'react';
import { When } from 'react-if';

import { LoginContext } from '../../context/auth/context.js';

function Login(props) {
  const auth = useContext(LoginContext);

  const [userInfo, setUserInfo] = useState({});

  const handleChange = e => {
    setUserInfo(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    auth.login(userInfo.username, userInfo.password);
  };

  return (
    <>
      <When condition={auth.loggedIn}>
        <button onClick={auth.logout}>Log Out</button>
      </When>

      <When condition={!auth.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <button>Login</button>
        </form>
      </When>
    </>
  );
}

export default Login;
