import React from 'react-native';
import template from './home_tpl';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };
    }

    render(){
        return template(this);
    }
}

export default Home;
