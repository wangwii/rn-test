import React from 'react-native';
import { Router, Route } from 'react-native-router-flux';

import Register from './pages/register';
import Home from './pages/home';

export default class extends React.Component {
    render() {
      return (
          <Router hideNavBar={true} >
              <Route name="register" component={Register} initial={true} title="用户登录"/>
              <Route name="home" component={Home} type="replace"/>
          </Router>
      );
    }
}
