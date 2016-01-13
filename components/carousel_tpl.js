import _ from 'lodash';
import React from 'react-native';
const { View, ScrollView } =  React;

const styles = React.StyleSheet.create({
});

export default (component)=> {
    var contents = _.isEmpty(component.props.children) ? null : null;

    return (
        <View {component.props.style}>
            { contents }
        </View>
    );
};
