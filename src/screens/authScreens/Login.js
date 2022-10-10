import React, { useState, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, Platform, PixelRatio, View, TextInput, ScrollView, Image } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'

const errorColor = 
    '#fe0000'

const darkBlue = '#2C467B'

const Login = ({ navigation }) => {

    return (
        <BaseScreen title={'Sign in'} navigation={navigation} renderChild={Content({ navigation })} leftButton={false} />
    )
}

const Content = ({ navigation }) => {
    const { login, fetching, setFetching } = useContext(AuthContext)

    const [email, setemail] = useState()
    const [password, setPassword] = useState()
    const [errors, setErrors] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const validate = () => {
        let errors = {}
        if (!email) {
            errors.email = "email is required"
            setErrors(errors)
            return false
        }
       
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email, use the format - abc@xyz.com'
            setErrors(errors)
            return false
        }
         
        else if (!password) {
            errors.password = "Password is required"
            setErrors(errors)
            return false
        }
        
        else {
            setErrors({})
            return true
        }
    }

    const handleSubmit = () => {
        let isValid = validate()
        if (isValid === true) {
            login(email, password, )
            
        }
    }


    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'handled'}>

            <Text style={[styles.heading, { marginBottom: 50, textAlign: 'center' }]}>Login Account</Text>

            <Text style={[styles.subHeading, { marginBottom: 5 }]}>Login with email</Text>
            <Input
                name="email" value={email} placeholder='Enter your email'
                error={errors.email ? true : false}
                keyboardType='email-address'
                onChangeText={(text) => {
                    setemail(text)
                }}>
            </Input>
            {errors.email ?
                <Text style={{ color: errorColor, marginBottom: 10, marginTop: -15 }}>{errors.email}</Text>
                : null
            }

            <Input
                name="password" value={password} placeholder='Enter Password'
                keyboardType='default' secureTextEntry={true}
                onChangeText={setPassword}>
            </Input>
            {errors.password ?
                <Text style={{ color: errorColor, marginBottom: 10, marginTop: -15 }}>{errors.password}</Text>
                : null
            }


            <View style={styles.rowAlign}>
                <View style={styles.checkboxContainer}>
                    <TouchableOpacity style={styles.checkbox} onPress={() => setIsSelected(!isSelected)}>
                        {isSelected ?
                            <MaterialIcons name='check' color="#F5CF04" size={20}></MaterialIcons>
                            : null
                        }
                    </TouchableOpacity>
                    <Text style={styles.regTxt}>Remember me </Text>
                </View>

                <TouchableOpacity style={styles.forgotBtnWrapper}
                    onPress={() => navigation.navigate('Forgot')}>
                    <Text style={styles.forgotBtn}>Forgot Password ?</Text>
                </TouchableOpacity>
            </View>


            <Button title='Log in'
                onPress={() => handleSubmit()
                } />

            <TouchableOpacity style={[styles.whiteBtn]}
                onPress={() => navigation.navigate('Register')}>
                <Text style={styles.subHeading}>Don't have an account ?<Text style={[styles.subHeading, {
                    color: '#F5CF04',
                    fontFamily: "Poppins-Bold",
                }]}> Sign Up</Text></Text>
            </TouchableOpacity>

           
        </ScrollView>
    )
}


export default Login

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    heading: {
        fontSize: 18,
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
    },
    subHeadingBold: {
        fontSize: 16,
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    subHeading: {
        fontSize: 16,
        color: '#000',
        fontFamily: "Roboto-Medium",
    },
    smTxt: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },
    rowAlign: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },


    checkboxContainer: {
        flexDirection: "row", justifyContent: 'center', alignItems: 'center',
        marginLeft: 10,
        // borderWidth:1,borderColor:'#fff'
    },
    checkbox: {
        alignSelf: "center",
        display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F5CF04'
    },

    forgotBtnWrapper: {
        // alignSelf: 'flex-end',
    },
    forgotBtn: {
        fontSize: 14,
        // color: '#fc9918'
        color: '#000',
        fontFamily: "Roboto-Medium",
    },

    orWrapper: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginVertical: 40,
    },
    orline: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        borderTopColor: '#aaa',
        borderTopWidth: 1,
        width: '30%',
    },
    orTxt: {
        // marginTop: -16.5,
        fontSize: 20, fontWeight: '600',
        backgroundColor: 'transparent',
        color: '#aaa',
        width: 50,
        textAlign: 'center'
    },

    whiteBtn: {
        backgroundColor: 'transparent',
        marginTop: 15,
        fontWeight: 500,
        color: "#fe0000",
        marginVertical:25,
        width:'100%',
        alignItems:'center'
    },
    fbButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        borderRadius: 6,
        backgroundColor: '#3228C5',
        marginBottom: 15,
    },
    socialButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%', height: 55,
        // marginTop:45,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        elevation: 4,
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    googleIcon: {
        width: 22, height: 22,
        marginRight: 20
    },
    socialBtnTxt: {
        fontSize: 16, fontWeight: '700',
        color: '#000'
    },
})
