import _ from 'lodash';
import React from 'react-native';
import template from './register_tpl';
import Router from 'react-native-router-flux';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { phone: '' };

        this.login = this.login.bind(this);
    }

    login(){
        if(_.isEmpty(this.state.phone)){
            React.Alert.alert('提示信息', '请输入您的手机号码。');
            return;
        }

        Router.Actions.main();
    }

    render(){
        return template(this);
    }
}

export default Register;
