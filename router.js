import React from 'react-native';
import { Router, Route, Schema, TabBar } from 'react-native-router-flux';

import Home from './pages/home';
import AboutMe from './pages/me';
import Register from './pages/register';
import Activity from './pages/activity';
import Designer from './pages/designer';

const { Text } = React;

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

export default class extends React.Component {
    render() {
      return (
          <Router hideNavBar={true}>
              <Schema name="tab" type="switch" icon={TabIcon} />
              <Route name="register" component={Register} initial={true} title="用户登录"/>
              <Route name="main" type="replace">
                  <Router footer={TabBar} hideNavBar={true}>
                      <Route name="home" schema="tab" component={Home} title="主页" />
                      <Route name="activities" schema="tab" component={Activity} title="活动" />
                      <Route name="designer" schema="tab" component={Designer} title="设计师" />
                      <Route name="me" schema="tab" component={AboutMe} title="我" />
                  </Router>
              </Route>
          </Router>
      );
    }
}
