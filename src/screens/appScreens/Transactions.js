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
    { id: 1, title: 'Amazon', img: require('../../assets/icons/expense.png'), price: '- $8.90', type: 2 },
    { id: 2, title: 'Cash from ATM', img: require('../../assets/icons/expense.png'), price: '- $250', type: 2 },
    { id: 3, title: 'Cash Back', img: require('../../assets/icons/income.png'), price: '+ $5.75', type: 1 },
]

const Transactions = ({ navigation }) => {
    return (
        <BaseScreen
            title={'Transactions'}
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
                    <View style={[styles.rowAlign, { width: '100%', justifyContent: 'space-between' }]}>
                        <View style={[styles.rowAlign, {}]}>
                            <Image source={item.img} style={{ marginRight: 20 }} />
                            <View>
                                <Text style={[styles.subHeading, {}]}>{item.title}</Text>
                                <Text style={[styles.smTxt, { color: '#545252' }]}>Today 6:25 pm</Text>
                            </View>
                        </View>
                        <Text style={[styles.subHeading, { color: item.type === 1 ? '#45C845' : '#F84545' }]}>{item.price}</Text>
                    </View>
                </View>
            )}


            <Text />
        </ScrollView>

    )
}

export default Transactions

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
        width: '99%',
        // height: PixelRatio.getPixelSizeForLayoutSize(60),
        marginBottom:5,
        backgroundColor: '#fff',
        borderBottomWidth:1,
        // borderRadius: 8,
        borderColor: '#ECECEC',
        // elevation: 3,
        // shadowColor: '#000',
        // // for ios below 
        // shadowOffset: { width: 5, height: 5 }
    },
    rowAlign: {
        display: 'flex', flexDirection: 'row',
        // width: '100%',
        // justifyContent: 'space-between',
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
        width: 34,
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