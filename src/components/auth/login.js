import { useState, useContext } from 'react';
import { When } from 'react-if';
import {
  Button,
  FormGroup,
  InputGroup,
  RadioGroup,
  Radio,
} from '@blueprintjs/core';
import { LoginContext } from '../../context/auth/context.js';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    // auth.login(userInfo.username, userInfo.password);
    auth.signup(userInfo);
  };

  console.log(userInfo);

  return (
    <>
      <When condition={auth.loggedIn}>
        <button onClick={auth.logout}>Log Out</button>
      </When>

      <When condition={!auth.loggedIn}>
        <form onSubmit={handleSubmit}>
          <InputGroup
            placeholder="UserName"
            name="username"
            onChange={handleChange}
          />
          <InputGroup
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          <RadioGroup name="role" onChange={handleChange}>
            <Radio label="user" value="user" />
            <Radio label="admin" value="admin" />
          </RadioGroup>
          <Button type="submit">Login</Button>
        </form>
      </When>
    </>
  );
}

export default Login;
