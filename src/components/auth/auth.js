import React from 'react';
import { When } from 'react-if';

import { LoginContext } from '../../context/auth/context.js';

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    console.log(this.props.capability);
    const isLoggedIn = this.context.loggedIn;
    const canDo = this.props.capability
      ? this.context.canHandler(this.props.capability)
      : true;
    const okToRender = isLoggedIn && canDo;

    return <When condition={okToRender}>{this.props.children}</When>;
  }
}

export default Auth;
