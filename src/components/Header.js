import React from 'react';
import { StyleSheet, Image, Dimensions , View } from 'react-native';
import Notifications from './Notifications'
import Susurro from './Susurro'
import SearchButton from './SearchButton'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = () => {
    return(
        <View style = {styles.header}>
            <View style = {styles.profileLogo}>
                 <Image style={styles.tinyLogo}  source={require('../assets/images/kun-profile.png')}/>
            </View>
          <View style = {styles.buttonsWrapper}>
            <Notifications />   
            <Susurro />
            <SearchButton />

          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: windowHeight/10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    profileLogo : {
        flex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent:'center',
        
    },

    tinyLogo: {
        width: 32,
        height: 32,
        borderRadius: 20,
    },
    buttonsWrapper : {
        width: 50,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
  });
  
  export default Header;