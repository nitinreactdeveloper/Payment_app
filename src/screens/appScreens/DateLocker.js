import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'
import Input from '../../components/Input'
import Button from '../../components/Button'
import moment from 'moment/moment'


const themeColor = '#F5CF04'

const Data = [
    { id: 1, title: '10000', },
    { id: 2, title: '20000', },
    { id: 3, title: '30000', },
]

const DateLocker = ({ navigation }) => {
    return (
        <BaseScreen
            title={'Date Locker'}
            renderChild={Content({ navigation })} navigation={navigation} paddingTop={false}
        />
    )
}


const Content = ({ navigation }) => {

    const { BaseUrl, appData, } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [search, setSearch] = useState('')

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}
        // justifyContent='center'
        >

            {/* <Text style={styles.heading}><Text style={[styles.heading, { color: '#F5CF04' }]}>Welcome</Text> to Dhanadara</Text>
            <Text style={[styles.heading, { marginBottom: 20 }]}>Find your choice</Text> */}

            {Data.map((item, index) =>
                <View key={index} style={styles.cardWrapper}>
                    <View style={styles.rowAlign}>
                        <Text style={[styles.subHeading, {}]}>Rent Payment (User Choice)</Text>
                        {/* <TouchableOpacity style={styles.secondaryBtn}>
                            <Text style={styles.secondaryBtnTxt}>Start</Text>
                        </TouchableOpacity> */}
                    </View>
                    <Text style={[styles.smTxt, { color: '#545252', textAlign: 'right' }]}>Status: Active</Text>
                    <View style={[styles.rowAlign, { marginBottom: 10 }]}>
                        <Text style={[styles.subHeading, {}]}>Balance: {item.title}</Text>
                        <Text style={[styles.smTxt, { color: '#545252' }]}>Unblock Date: 5th Oct 2022</Text>
                    </View>
                    <View style={styles.rowAlign}>
                        <Button title={'Deposit'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                        <Button title={'Withdraw'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                    </View>
                </View>
            )}

            <View style={styles.cardWrapper}>
                <View style={styles.rowAlign}>
                    <Text style={[styles.subHeading, {}]}>Create New Locker</Text>
                    <TouchableOpacity style={styles.roundBtn}>
                        {/* <Text style={styles.roundBtnTxt}>+</Text> */}
                        <MaterialIcons name='add' size={20} color={'#fff'} />
                    </TouchableOpacity>
                </View>
                <Text style={[styles.smTxt, { color: '#545252', textAlign: 'right' }]}>Status: Not Started</Text>
                <View style={[styles.rowAlign, { marginBottom: 10 }]}>
                    <Text style={[styles.subHeading, {}]}>Balance: 0</Text>
                    <Text style={[styles.smTxt, { color: '#545252' }]}>Unblock Date: 5th Oct 2022</Text>
                </View>
                <View style={styles.rowAlign}>
                    <Button title={'Deposit'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                    <Button title={'Withdraw'} height={34} marginBottom={0} width={'48%'} onPress={() => navigation.navigate('Wallet')} />
                </View>
            </View>
            <Text />
        </ScrollView>

    )
}

export default DateLocker

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
    roundBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 34,
        width:34,
        marginBottom: 10,
        borderRadius: 17,
        backgroundColor: themeColor,
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    roundBtnTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#fff',
        // fontFamily: 'Roboto-Bold',
        fontFamily: 'Roboto-Medium',
    },

})