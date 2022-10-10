import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Image, ScrollView, ImageBackground } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../../navigation/AuthProvider'
import axios from 'react-native-axios'
import Input from '../../components/Input'
import RazorpayCheckout from 'react-native-razorpay'


import BaseScreen from '../../components/BaseScreen'
import Button from '../../components/Button'
// import { handlePayments } from './Payment'

const Money = ({ navigation }) => {

    return (
        <BaseScreen title={'Add Money'} navigation={navigation} renderChild={Content({ navigation })} specialButton={false} />
    )
}

const Content = ({ navigation }) => {



    

    const { BaseUrl, userToken } = useContext(AuthContext)

    const activeColor = "#F5CF04"

    const [money, setMoney] = useState("1500")
    const [type, setType] = useState('')
    const [wallet, setWallet] = useState('0')
    const [searchError, setSearchError] = useState(false)
    const [mainBalance, setMainBalance] = useState(6000)

    const getWallet = async () => {
        setWallet(0)
        setMainBalance(5000)
        //pay_IiSIx0XxOVTetY --- first payment id,,, pay_IiSSEih0xlSmJb --- second payment id
        // setLoading(true)
        // var data = new FormData();
        // data.append('user_id', userToken)
        // await axios.post("https://earnezy.in/android_shop/getwalletbalance.php", data, {
        //     headers: { "Content-type": "multipart/form-data" }
        // })
        //     .then((response) => {
        //         console.log(response.data, 'getwalletbalance Api successful')
        //         setLoading(false)
        //         let arr = response.data
        //         if (response.data !== null) {
        //             setWallet(response.data.wallet)
        //             setMainBalance(response.data.wallet)
        //         }
        //     })
        //     .catch((error) => {
        //         setMessage('Network issue.')
        //         console.log(error, 'error while fetching getwalletbalance api')
        //         setLoading(false)
        //     })
       
    }

    useEffect(() => {
        getWallet()
    }, [])

    const items = [
        { id: '1', name: "500" },
        { id: '2', name: "1000" },
        { id: '3', name: "1500" },
        { id: '4', name: "2000" },
    ]

    const offers = [
        { id: '1', name: "Open App", button: false, addOn: '+5', desc: 'Open app everyday and you will get upto 5 points.', note: '' },
        { id: '2', name: "Today's Deal", button: true, addOn: '', desc: 'Go to deals and follow the given steps to earn.', note: '' },
        { id: '3', name: "New year welcome offer", button: true, desc: 'Add Rs 2022 in your wallet and get 100% cashback.', note: 'Offer available for limited users' },
        // { id: '4', name: "pqrs" },
    ]

    
  const Pay =() => {
   
}

    return (

        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}
        // justifyContent='center'
        >
            {searchError ?
                <Text style={{ color: 'red', marginVertical: 20 }}>{searchError}</Text>
                : null
            }

            <View style={styles.imgWrapper}>
                <Image source={require("../../assets/icons/wallet_icon.png")} style={styles.bgImg}>
                </Image>
            </View>

            <Text style={styles.catTitle}>Available Balance</Text>

            <View style={styles.priceTag}>
                <Text style={styles.priceTxt}>₹ {wallet}</Text>
            </View>

            <Input
                name="money" value={'500'} placeholder='Add amount'
                iconType={2}
                icon='rupee-sign' keyboardType='default'
                onChangeText={setMoney}>
            </Input>

            <View style={[styles.rowWrap, { marginBottom: 10, justifyContent: 'space-around' }]}>
                <ScrollView style={styles.horizontalScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {items.map((item, idx) =>
                        <TouchableOpacity key={idx} style={[styles.category, { borderColor: type === item.id ? activeColor : '#ddd', borderWidth: 1, height: 40, width: 80 }]}
                            onPress={() => {
                                setType(item.id)
                                setMoney(item.name)
                                
                                // if (category !== '') {
                                //     navigation.navigate('History')
                                // }
                            }}>
                            <Text style={styles.whiteTxt2}>₹ {item.name}</Text>
                        </TouchableOpacity>
                    )}
                </ScrollView>
            </View>

            <Button title={'Add Money'} 
            onPress={()=>{
                var options = {
                    description: 'TechNinza',
                    image: 'https://i.imgur.com/3g7nmJC.jpg',
                    currency: 'INR',
                    key: 'rzp_test_7JFMstTaZGMnre',
                    amount: `${money}00`,
                    name: 'Acme Corp',
                    //: '',//Replace this with an order_id created using Orders API.
                    prefill: {
                      email: 'gaurav.kumar@example.com',
                      contact: '9191919191',
                      name: 'Gaurav Kumar'
                    },
                    theme: {color: '#53a20e'}
                  }
                  RazorpayCheckout.open(options).then((data) => {
                    // handle success
                    alert(`Success: ${data.razorpay_payment_id}`);
                  }).catch((error) => {
                    // handle failure
                    alert(`Error: ${error.code} | ${error.description}`);
                  });
            }}
               
          />

            <View style={styles.darkHeadingBg}>
                <Text style={styles.heading}>Coupons for you</Text>
            </View>

            <View style={styles.cardWrapper}>
                <Text style={styles.subtitle}>{offers[2].name}</Text>
                <Text style={styles.desc}>{offers[2].desc}</Text>
                {offers[2].note ?
                    <Text style={styles.desc}>* {offers[2].note}</Text> : null
                }
                {offers[2].button ?
                    <TouchableOpacity style={[styles.socialBtn,]}
                        onPress={() => { }}>
                        <Text style={styles.solidBtnTxt}>T & C</Text>
                    </TouchableOpacity>
                    : null
                }
            </View>

        </ScrollView >
    )
}

export default Money

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        // backgroundColor:'black'
        // borderWidth:1,borderColor:'#fff'
    },
    catTitle: {
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: "PTSans-Bold",
        marginBottom: 10
    },
    categoryWrapper: {
        marginTop: 40,
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
    category: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '43%',
        height: 220,
        marginHorizontal: 8,
        marginVertical: 8,
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#fff',
    },
    imgWrapper: {
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        width: 110,
        height: 110,
        padding: 5,
        borderRadius: 60,
        // borderWidth: 1,
        borderColor: '#555',
        overflow: 'hidden'
    },
    bgImg: {
        width: 95,
        height: 95,
        borderRadius: 95 / 2,
        // resizeMode: 'contain',
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
    priceTag: {
        alignSelf: 'center',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: 'green',
        marginBottom: 20
    },
    priceTxt: {
        color: '#fff'
    },
    darkHeadingBg: {
        marginTop: 20,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#ddd',
        paddingHorizontal: 15,
        paddingVertical: 7
    },
    heading: {
        fontSize: 14,
        color: '#000'
    },
    cardWrapper: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        // justifyContent: 'center', alignItems: 'center',
        padding: 10,
        width: '95%',
        // height: 140,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        overflow: 'hidden',
        marginHorizontal: 8,
        elevation: 3,
        shadowColor: '#ccc',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    subtitle: {
        fontSize: 14,
        color: '#000'
    },
    desc: {
        marginVertical: 5
    },
    socialBtn: {
        marginVertical: 10,
        alignSelf: 'flex-end',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 30,
        borderRadius: 25,
        backgroundColor: '#F5CF04',
    },
    solidBtnTxt: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
        fontFamily: "PTSans-Bold",
    },

})
