import React from 'react-native';
import Dimensions from 'Dimensions';
import Carousel from 'react-native-looped-carousel';

// import img0 from 'image!../images/01.jpg';
// import img1 from 'image!../images/02.jpg';
// import img2 from 'image!../images/03.jpg';
// import img3 from 'image!../images/04.jpg';

const { View, Text, TextInput, Image } =  React;
//const {width, height} = Dimensions.get('window');

const styles = React.StyleSheet.create({
    header: {
        backgroundColor: '#DB0A5B'
    },
    searchInputContainer: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        opacity: 50,
        borderColor: '#D24D57',
        borderRadius: 15,
        backgroundColor: '#D24D57'
    },
    searchInput: {
        color: '#FFFFFF',
        fontSize: 10,
        textDecorationLine: 'none'
    },
    carousel: {
        height: 160
    },
    imageViewer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    image: {

    }
});

export default (page)=> {
    return (
        <View>
            <View style={styles.header}>
                <View style={styles.searchInputContainer}>
                    <TextInput value={page.state.search} style={styles.searchInput}
                       placeholder='搜索设计师/动态6' placeholderTextColor='#BFBFBF'
                       underlineColorAndroid='transparent'
                       onChangeText={(search) => page.setState({search})} />
                </View>
            </View>

            <Carousel delay={1500} style={styles.carousel}>
                <Image style={styles.carousel} resizeMode="cover" source={{uri: 'http://tse2.mm.bing.net/th?id=OIP.Me948f4841f5df947832cb6722d847672o0&pid=15.1'}} />
                <Image style={styles.carousel} resizeMode="cover" source={{uri: 'http://tse4.mm.bing.net/th?id=OIP.Mae67d08ff5640ef664416af92fe02588H0&pid=15.1'}} />
                <Image style={styles.carousel} resizeMode="cover" source={{uri: 'http://tse3.mm.bing.net/th?id=OIP.Mc79e54558413d9ff8ced143facaa868ao0&pid=15.1'}} />
                <Image style={styles.carousel} resizeMode="cover" source={{uri: 'http://tse3.mm.bing.net/th?id=OIP.Mec33a1fdc2e850ab5f701238595afd47H0&pid=15.1'}} />
            </Carousel>

            <View style={styles.imageViewer}>
                <Image style={{width: 180, height: 240, marginTop: 5}} resizeMode="cover" source={{uri: 'http://tse2.mm.bing.net/th?id=OIP.Me948f4841f5df947832cb6722d847672o0&pid=15.1'}} />
                <Image style={{width: 100, height: 130, marginTop: 5}} resizeMode="cover" source={{uri: 'http://tse4.mm.bing.net/th?id=OIP.Mae67d08ff5640ef664416af92fe02588H0&pid=15.1'}} />
                <Image style={{width: 240, height: 80, marginTop: 5}} resizeMode="cover" source={{uri: 'http://tse3.mm.bing.net/th?id=OIP.Mc79e54558413d9ff8ced143facaa868ao0&pid=15.1'}} />
            </View>
        </View>
    );
};
