import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ScrollView, Share, Linking, Alert } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import axios from 'react-native-axios'

import BaseScreen from '../../components/BaseScreen'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Wallet = ({ navigation }) => {


    return (
        <BaseScreen title="Wallet" navigation={navigation} renderChild={Content({ navigation })}
            specialButton={
                <TouchableOpacity onPress={() => { navigation.navigate('Transactions') }}>
                    <MaterialIcons name="history" size={25} color='#000'></MaterialIcons>
                </TouchableOpacity>} />
    )
}

const Content = ({ navigation }) => {

    const { BaseUrl, userDetails, userToken, } = useContext(AuthContext)

    const activeColor = "green"

    const [money, setMoney] = useState("1500")
    const [mainBalance, setMainBalance] = useState(6000)
    const [searchError, setSearchError] = useState(false)
    const [popup, setPopup] = useState(false)

    const withdraw = async () => {
        let amount = parseInt(money, 10)
        let bal = parseInt(mainBalance, 10)
        if (amount > bal) {
            Alert.alert('Amount can not exceed Wallet Balance')
        }
        else if (amount < 100) {
            Alert.alert('Withdrawal amount can not be less than 100')
        }
        else {
            Alert.alert('Money withdrawal success')
            // var data = new FormData();
            // data.append('user_id', userToken)
            // data.append('amount', money)
            // data.append('rem', bal - amount)
            // await axios.post(BaseUrl + "withdraw_request.php", data, {
            //     headers: { "Content-type": "multipart/form-data" }
            // })
            //     .then((response) => {
            //         console.log(response.data, 'withdraw_request Api successful')
            //         setLoading(false)
            //         setPopup(false)
            //         getWallet()
            //     })
            //     .catch((error) => {
            //         setMessage('Network issue.')
            //         console.log(error, 'error while fetching withdraw_request api')
            //         setLoading(false)
            //     })
        }
    }

    return (
        <>
            {popup ?
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 15, marginHorizontal: 15, paddingTop: 30 }}>
                        <TouchableOpacity style={{ position: 'absolute', top: 5, right: 5, }}
                            onPress={() => setPopup(false)}>
                            <MaterialIcons name="highlight-off"
                                color='green'
                                size={26} />
                        </TouchableOpacity>
                        <Input
                            name="money" value={money} placeholder='Enter Amount'
                            iconType={2}
                            icon='rupee-sign' keyboardType='default'
                            onChangeText={setMoney}>
                        </Input>
                        <Button title={'Withdraw'} onPress={() => { withdraw() }} width={150} />
                    </View>
                </View>
                : null}

            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}
            // justifyContent='center'
            >
                {searchError ?
                    <Text style={{ color: 'red', marginVertical: 20 }}>{searchError}</Text>
                    : null
                }

                <View style={styles.cardWrapper}>
                    <View style={styles.rowAlign}>
                        <View style={styles.imgWrapper}>
                            <Image source={require("../../assets/icons/wallet_icon.png")} style={styles.bgImg}>
                            </Image>
                        </View>
                        <View>
                            <Text style={styles.catTitle}>Total Amount</Text>
                            <Text style={styles.subtitle}>₹ {mainBalance}</Text>
                        </View>
                    </View>

                    <View style={[styles.rowAlign, { justifyContent: 'space-around' }]}>
                        <TouchableOpacity style={[styles.socialBtn,]}
                            onPress={() => {
                                withdraw()
                                // userDetails.account_no !== '' ?
                                //     setPopup(true)
                                //     :
                                //     navigation.navigate('BankDetails')
                            }}>
                            <Text style={styles.solidBtnTxt}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.socialBtn,]}
                            onPress={() => { navigation.navigate('AddMoney') }}>

                            <Text style={styles.solidBtnTxt}>Add Money</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.cardWrapper}>
                    <View style={[styles.rowAlign, { justifyContent: 'space-between' }]}>
                        <MaterialIcons name="emoji-events"
                            color='green'
                            size={55} />
                        <View>
                            <Text style={styles.catTitle}>Total Points</Text>
                            <Text style={styles.subtitle}>100</Text>
                        </View>
                        <View>

                            <TouchableOpacity style={[styles.socialBtn, { width: 90, height: 30 }]}
                                onPress={() => { navigation.navigate('AddMoney') }}>
                                <Text style={styles.solidBtnTxt}>Redeem</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.cardWrapper}>
                    <View style={[styles.rowAlign,]}>
                        <MaterialIcons name="emoji-events"
                            color='green'
                            size={55} />
                        <View style={{ display: 'flex', marginLeft: 60, }}>
                            <Text style={styles.catTitle}>Your Referral Amount</Text>
                            <Text style={styles.subtitle}> ₹ 50</Text>
                            <View style={{ width: '99%', }}>
                                <Text>Amount will be transferred to main wallet.</Text>
                            </View>
                        </View>
                        {/* <View>

                        <TouchableOpacity style={[styles.socialBtn, { width: 100, height: 30 }]}
                            onPress={() => { navigation.navigate('AddMoney') }}>
                            <Text style={styles.solidBtnTxt}>Redeem</Text>
                        </TouchableOpacity>
                    </View> */}
                    </View>
                </View>

            </ScrollView >
        </>
    )
}

export default Wallet

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        // backgroundColor:'black'
        // borderWidth:1,borderColor:'#fff'
    },
    socialBtn: {
        marginVertical: 10,
        alignSelf: 'flex-end',
        display: 'flex', flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        height: 40,
        borderRadius: 25,
        backgroundColor: '#F5CF04',
    },
    solidBtnTxt: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "PTSans-Bold",
        marginLeft: 10
    },
    catTitle: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: "PTSans-Bold",
    },
    rowAlign: {
        display: 'flex', flexDirection: 'row',
        // justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15,
        // borderWidth:1
    },
    imgWrapper: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        width: 150,
        height: 100,
        // borderRadius: 60,
        // borderWidth: 1,
        borderColor: '#555',
        overflow: 'hidden'
    },
    bgImg: {
        width: 150,
        height: 100,
        // borderRadius: 95 / 2,
        resizeMode: 'contain',
        // backgroundColor:'#222'
    },
    rowWrap: {
        // marginTop: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
        // paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 5,
        // backgroundColor: 'green',
    },
    cardWrapper: {
        marginBottom: 20,
        display: 'flex',
        // justifyContent: 'center', alignItems: 'center',
        padding: 10,
        width: '95%',
        // height: 140,
        borderRadius: 5,
        borderWidth: 0.5,
        backgroundColor: '#fff',
        borderColor: '#eee',
        overflow: 'hidden',
        marginHorizontal: 8,
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    heading: {
        // textAlign: 'center',
        fontSize: 18,
        color: '#000',
        fontWeight: '700',
        marginLeft: 10
    },
    subtitle: {
        fontSize: 16,
        color: '#000',
        lineHeight: 26,
        // textAlign:'center'
    },
    container: {
        position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
        flex: 1,
        backgroundColor: '#0009',
        zIndex: 100,
        justifyContent: 'center', alignItems: 'center'
    }

})
