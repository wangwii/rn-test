import React from 'react-native';
import BaseStyles from '../styles/base';

const { View, Text, TextInput } =  React;

const styles = React.StyleSheet.create({
    header: {
        padding: 15,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 16
    },
    loginButton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 15,
        padding: 10,
        textAlign: 'center',
        fontWeight: '600'
    }
});

export default (page)=> {
    return (
        <View>
            <Text style={[BaseStyles.base, styles.header]}>
                {page.props.title}
            </Text>
            <TextInput value={page.state.text} autoFocus={true} keyboardType='numeric'
                       placeholder='请输入手机号码'
                       onChangeText={(phone) => page.setState({phone})} />

            <TextInput value='871029' keyboardType='numeric' placeholder='验证码'/>

            <Text numberOfLines={1} onPress={page.login}
                style={[BaseStyles.base, styles.loginButton]}>
                    登录
            </Text>
        </View>
    );
};
