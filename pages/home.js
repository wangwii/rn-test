import React from 'react-native';

const { Text } =  React;

class Home extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>
              Home page.
            </Text>
        );
    }
}

export default Home;
