import {StyleSheet, Text, View, Image} from 'react-native';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StackActions} from '@react-navigation/native';
import {COLOR} from '../../Styles/color';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace('Login'));
    }, 3000);
  }

  render() {
    return (
      <View style={[styles.container]}>
        {/* <Image
          style={[styles.tinyLogo]}
          source={require('../../Assets/logo_footer.png')}
        /> */}
        <Text
          style={{
            fontSize: wp(5.5),
            fontWeight: 'bold',
            textAlign: 'center',
            color: COLOR.BLACK,
          }}>
          SplashScreen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: wp(100),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    backgroundColor: '#fff',
    height: hp(30),
    width: wp(60),
    alignSelf: 'center',
  },
});

export default SplashScreen;
