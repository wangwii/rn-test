import React from 'react-native';
import template from './designer_tpl';

class Designer extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return template(this);
    }
}

export default Designer;
