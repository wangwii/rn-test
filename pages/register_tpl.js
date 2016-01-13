import React from 'react-native';

const { View, Text, TextInput } =  React;

const styles = React.StyleSheet.create({
    base: {
        backgroundColor: '#DB0A5B'
    },
    header: {
        margin: 15,
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 16
    },
    loginButton: {
        color: '#FFFFFF',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        padding: 10,
        textAlign: 'center',
        fontWeight: '600'
    }
});

export default (page)=> {
    return (
        <View>
            <View style={[styles.base, {alignItems: 'center', justifyContent: 'center'}]}>
                <Text style={styles.header}>
                    {page.props.title}
                </Text>
            </View>

            <TextInput value={page.state.text} autoFocus={true} keyboardType='numeric'
                       placeholder='请输入手机号码'
                       onChangeText={(phone) => page.setState({phone})} />

            <TextInput value='871029' keyboardType='numeric' placeholder='验证码'/>

            <Text numberOfLines={1} onPress={page.login}
                style={[styles.base, styles.loginButton]}>
                    登录
            </Text>
        </View>
    );
};
