import React from 'react-native';
import template from './activity_tpl';

class Activity extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return template(this);
    }
}

export default Activity;
