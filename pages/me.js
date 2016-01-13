import React from 'react-native';
import template from './me_tpl';

class Me extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return template(this);
    }
}

export default Me;
