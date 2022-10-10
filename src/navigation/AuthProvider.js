import { View, Text } from 'react-native'
import React, { useState, useEffect, createContext, useReducer, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios';
import messaging from '@react-native-firebase/messaging';
// import { getAppData } from '../screens/appScreens/AppData'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const BaseUrl = "https://shopninja.in/sunaar24/api2/public/index.php"

    const [userToken, setUserToken] = useState(null)
    const [isFirstLaunch, setIsFirstLaunch] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    const [userDetails, setUserDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const [initialRoute, setInitialRoute] = useState('Drawer')

    const initialFetch = {
        loading: false,
        success: false,
        error: false,
        response: false
    }
    const fetchReducer = (state, action) => {
        switch (action.type) {
            case 'setLoading': return { ...state, loading: action.value }
            case 'setSuccess': return { ...state, success: action.value }
            case 'setError': return { ...state, error: action.value }
            case 'setResponse': return { ...state, response: action.value }
            case 'reset': return initialFetch
            default: return state
        }
    }
    const [fetching, setFetching] = useReducer(fetchReducer, initialFetch)

    const initialAppData = {
        patients: "",
    }
    const dataReducer = (state, action) => {
        switch (action.type) {
            case 'setPatients': return { ...state, patients: action.value }
            default: return state
        }
    }
    const [appData, setAppData] = useReducer(dataReducer, initialAppData)

    const getToken = async () => {
        await AsyncStorage.getItem('userToken').then(value => {
            if (value !== null) {
                setUserToken(value)

            }
        })
    }
    const getFcmToken = async () => {
        try {
            const token = await messaging().getToken();
            console.log('FCM token registered:', token);
            setDeviceId(token)
            console.log('FCM token length:', token.length);
        } catch (error) {
            console.error('Error getting FCM token:', error);
        }
    }
    const getIntialLaunch = () => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLaunch(true);
            }
        })
    }

    const getApiData = (id) => getAppData(id, setFetching, setAppData)

    useEffect(() => {
        getToken()
        // getFcmToken()
        getIntialLaunch()
    }, [])


    return (
        <AuthContext.Provider value={{
            userToken, fetching, setFetching, isFirstLaunch, setIsFirstLaunch, appData, setAppData, BaseUrl,
            // login: async (email, password) => {
            //     setFetching({ type: 'setLoading', value: true })
            //     setTimeout(() => {
            //         setUserToken(100)
            //         // getApiData(100)
            //         AsyncStorage.setItem('userToken', '100')
            //         setFetching({ type: 'setLoading', value: false })
            //     }, 1500)
            // },
            login: async (email, password) => {
                console.log(email, password, 'username,password entered are')
                setLoading(true)
                var form = new FormData()
                form.append('email', email);
                // form.append('mobile', mobile);
                form.append('password', password);
                form.append('device_id', deviceId);
                await axios.post(BaseUrl + "/customer_login", form, {
                    headers: { "Content-type": "multipart/form-data" }
                })
                    .then((response) => {
                        console.log(response.data, 'customer_login Api successful')

                        setLoading(false)
                        if (response.data.status === 200) {
                            setUserToken(response.data.msg.cust_id)
                            AsyncStorage.setItem('userToken', response.data.msg.cust_id)
                            setUserDetails(response.data.msg)
                            
                        }
                        else if (response.data.status === 400) {
                            alert(response.data.msg)
                        }
                        else {
                            setMessage(response.data.msg)
                        }
                    })
                    .catch((error) => {
                        setMessage('Network issue.')
                        console.log(error, 'error while fetching Api')
                        setLoading(false)
                    })

            },

            register: async (name, email, mobile, password, navigation) => {
                console.log(email, password, 'username,password entered are')
                setLoading(true)
                var form = new FormData()
                form.append('name', name);
                form.append('email', email);
                form.append('mobile', mobile);
                form.append('password', password);
                form.append('device_id', deviceId);
                form.append('platform', '1');
                await axios.post(BaseUrl + "/customer_signup", form, {
                    headers: { "Content-type": "multipart/form-data" }
                })
                    .then((response) => {
                        console.log(response.data, 'customer_signup Api successful')
                        setLoading(false)
                        if (response.data.status === 200) {
                            setUserDetails(response.data.msg)

                        }
                        else {

                            setMessage(response.data.msg)
                        }
                    })
                    .catch((error) => {
                        setMessage('Network issue.')
                        console.log(error, 'error while fetching Api')
                        setLoading(false)
                    })
            },

            logout: async () => {
                try {
                    setFetching({ type: 'setLoading', value: true })
                    await AsyncStorage.getItem('userToken').then((value) => console.log(value, 'is being logged out'))
                    await AsyncStorage.removeItem('userToken')
                    setUserToken(null)
                    setFetching({ type: 'setLoading', value: false })
                }
                catch (e) {
                    console.log(e)
                    setFetching({ type: 'setLoading', value: false })
                }
            },
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }

// generate new debug.keystore ---
    // keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
    // see sha1 key --
    // keytool -exportcert -keystore ./android/app/debug.keystore -list -v