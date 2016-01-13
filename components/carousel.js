import React from 'react-native';
import template from './carousel_tpl';

class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasChildren: !!this.props.children
        }
    }

    componentDidMount(){
        //start timer
    }

    componentWillUnmount() {
        //stop timer
    }

    render(){

    }
}

Carousel.propTypes = {
    children: React.PropTypes.node.isRequired,
    delay: React.PropTypes.number,
    autoplay: React.PropTypes.bool,
    onAnimateNextPage: React.PropTypes.func,
    style: View.propTypes.style,
    pageStyle: View.propTypes.style,
    contentContainerStyle: View.propTypes.style
};

Carousel.defaultProps = {
    delay: 3000,
    autoplay: true
};

export default Carousel;
