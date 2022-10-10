import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions , FlatList} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'
import Swiper from 'react-native-swiper'

import RazorpayCheckout from 'react-native-razorpay'

const themeColor = '#F5CF04'

const Data = [
    { id: 1, title: 'Date Locker', img: require('../../assets/icons/box.png'), route: 'DateLocker', backgroundColor: '#eec8bf' },
    { id: 2, title: 'Amount Locker', img: require('../../assets/icons/safe.png'), route: 'AmountLocker' },
    { id: 3, title: 'Personal Finance', img: require('../../assets/icons/loan.png'), route: 'AmountLocker' },
    { id: 4, title: 'Other', img: require('../../assets/icons/application.png'), route: 'Transactions' },
]

const HomeScreen = ({ navigation }) => {
    return (
        <BaseScreen
            logo={
                <TouchableOpacity onPress={() => { }}>
                    <Text style={{
                        // fontSize: 22,
                        fontSize: PixelRatio.getPixelSizeForLayoutSize(8.5),
                        color: '#000', fontFamily: "Roboto-Bold"
                    }}>PaymentApp</Text>

                </TouchableOpacity>
            }
            renderChild={Content({ navigation })} navigation={navigation} leftButton={'menu'} paddingTop={false} paddingHorizontal={true}
            rightButton={
                <TouchableOpacity onPress={() => { navigation.navigate('Profile') }}>
                    <MaterialIcons name="person" size={25} color={'#000'}></MaterialIcons>
                </TouchableOpacity>} />
    )
}


const Item = ({ title }) => (
    <View style={{}}>
      <Text style={{}}>{title}</Text>
    </View>
  );
const Content = ({ navigation }) => {

    const { BaseUrl, appData, } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [search, setSearch] = useState('')
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    

    return (
        <ScrollView style={styles.contentScroll} 
        // justifyContent='center'
        >

            {/* <Text style={styles.heading}><Text style={[styles.heading, { color: '#F5CF04' }]}>Welcome</Text> to Dhanadara</Text>
            <Text style={[styles.heading, { marginBottom: 20 }]}>Find your choice</Text> */}

            <Swiper style={styles.rowWrap}  height={'34%'} showsButtons={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                {Data.map((item, index) =>
                    <TouchableOpacity key={index} style={styles.cardWrapper} onPress={() => navigation.navigate(item.route)}>
                        <Image source={item.img} style={styles.cardImg} resizeMode = {'contain'} />
                        <Text style={[styles.subHeading, { marginTop: 15 }]}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            </Swiper>
          

          <Text>
            
            This is about to push the project to repo.
            
            </Text> 
          

            <Button title={'Wallet'} onPress={() => navigation.navigate('Wallet')} />

        </ScrollView>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        // height: '100%',
        // flex:1,
        width: '100%',
        position: 'relative',
        paddingTop: 10,
// backgroundColor: '#000'
    },
    heading: {
        // fontSize: 18,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
    },
    subHeadingBold: {
        // fontSize: 16,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    subHeading: {
        // fontSize: 16,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-Medium",
    },
    smTxt: {
        // fontSize: 12,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        // fontSize: 14,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },

    cardWrapper: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '85%',
        height: 180,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
        color: '#000',
        // for ios below 
        margin: 5,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#eec8bf'
  
    },
    rowAlign: {
        display: 'flex', 
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowWrap: {
        // display: 'flex',
        // width: '100%',
        // flex: 1,
        // paddingHorizontal: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexDirection: 'row',
        // flexWrap: 'wrap'
        
    },
    iconTxtBtn: {
        display: 'flex', 
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
        color: '#fff'
    },
    badge: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#2a2',
    },
    secondaryBtn: {
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        alignItems: 'flex-end',
        width: 70,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#fff',
        // borderWidth: 1,
        borderColor: themeColor,
    },
    secondaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: themeColor,
        // fontFamily: 'Roboto-Bold',
        fontFamily: 'Roboto-Medium',
    },
    // cardImg:{
    //     width: '105%',
    //     height: 0
    // }

})