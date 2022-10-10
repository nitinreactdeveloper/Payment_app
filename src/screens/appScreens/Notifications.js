import React, { useContext, useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, PixelRatio, Button } from 'react-native';
import BaseScreen from '../../components/BaseScreen';
import { AuthContext } from '../../navigation/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {requestUserPermission} from '../Units/NotificationServices'

const themeColor = '#F5CF04'

const Notifications = ({ navigation }) => {
    return (
        <BaseScreen
            title={"Notifications"}
            renderChild={Content({ navigation })} navigation={navigation} paddingTop={true}
        />
    )
}

const Content = ({ navigation }) => {

   

    const { BaseUrl, appData, } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [search, setSearch] = useState('')

    



    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}

        >

            {/* <Text style={styles.heading}><Text style={[styles.heading, { color: '#F5CF04' }]}>Welcome</Text> to Dhanadara</Text>
            <Text style={[styles.heading, { marginBottom: 20 }]}>Find your choice</Text> */}

            {/* {Data.map((item, index) =>
                <View key={index} style={styles.cardWrapper}>
                    <View style={styles.rowAlign}>
                        <Text style={[styles.subHeading, {}]}>Goal: {item.title}</Text>
                        <TouchableOpacity style={styles.secondaryBtn}>
                            <Text style={styles.secondaryBtnTxt}>Start</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={[styles.smTxt, { color: '#545252', textAlign: 'right' }]}>Status: Inactive</Text>
                    <View style={[styles.rowAlign, { marginBottom: 10 }]}>
                        <Text style={[styles.subHeading, {}]}>Balance: {'6800'}</Text>
                        <Text style={[styles.smTxt, { color: '#545252' }]}>Unblock Amount: Rs 1000</Text>
                    </View>
                    <View style={styles.rowAlign}>
                        <Button title={'Deposit'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                        <Button title={'Withdraw'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                    </View>
                </View>
            )} */}
            <Text>
                Push Notification
            </Text>
            <Button title='display Notification' onPress={()=>{}}/>
        </ScrollView>
    )
}



export default Notifications;


const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
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
        // justifyContent:'center',
        // alignItems:'center',
        padding: 10,
        paddingVertical: 15,
        width: '99%',
        // height: PixelRatio.getPixelSizeForLayoutSize(60),
        marginVertical: 7,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderColor: '#fcfcfc',
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    rowAlign: {
        display: 'flex', flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowWrap: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 5,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconTxtBtn: {
        display: 'flex', flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        height: 35,
        paddingHorizontal: 10,
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
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 34,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: themeColor,
    },
    secondaryBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: themeColor,
        // fontFamily: 'Roboto-Bold',
        fontFamily: 'Roboto-Medium',
    },

})