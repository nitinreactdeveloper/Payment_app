import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, AppState } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons'

import { AuthContext } from './AuthProvider';
import HomeScreen from '../screens/appScreens/HomeScreen';
import Home from '../screens/appScreens/Home';
import Profile from '../screens/appScreens/Profile'
import Money from '../screens/appScreens/Money'
import DrawerContent from '../components/DrawerContent';
import PrivacyScreen from '../screens/appScreens/Privacy';
import AddMoney from '../screens/appScreens/AddMoney';
import Wallet from '../screens/appScreens/Wallet';
import AmountLocker from '../screens/appScreens/AmountLocker';
import DateLocker from '../screens/appScreens/DateLocker';
import Transactions from '../screens/appScreens/Transactions';
import CartScreen from '../screens/appScreens/Cart';
import Term_privacyScreen from '../screens/appScreens/Term&Privacy';
import Notifications from '../screens/appScreens/Notifications';


const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const activeTabColor =
    '#F5CF04'
const nonActiveTabColor =
    '#C4C4C4'
const backgroundTabColor =
    '#fff'

const AppStack = () => {

    const { userToken, userDetails } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={"Drawer"}>
            <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                }}>
            </Stack.Screen>
            {/* <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />  */}

            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Money" component={Money} options={{ headerShown: false }} /> */}
            <Stack.Screen name="AddMoney" component={AddMoney} options={{ headerShown: false }} />
            <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
            <Stack.Screen name="AmountLocker" component={AmountLocker} options={{ headerShown: false }} />
            <Stack.Screen name="DateLocker" component={DateLocker} options={{ headerShown: false }} />
            <Stack.Screen name="Transactions" component={Transactions} options={{ headerShown: false }} />
            <Stack.Screen name='Cart' component={CartScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Term and Privacy' component={Term_privacyScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
            <Stack.Screen name='Privacy' component={PrivacyScreen} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}

export default AppStack

const DrawerNavigator = ({ navigation }) => (
    <Drawer.Navigator initialRouteName="Home"
        drawerContent={props => <DrawerContent{...props} />}
    >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

    </Drawer.Navigator>
)

// const BottomTabNav = ({ navigation }) => (

//     <Tab.Navigator initialRouteName="Drawer"
//         screenOptions={{
//             keyboardHidesTabBar: true,
//             showLabel: false,
//             tabBarShowLabel: false,
//             tabBarStyle: {
//                 // position: 'absolute',
//                 // elevation: 5,
//                 backgroundColor: backgroundTabColor,
//                 borderTopWidth: 1,
//                 borderTopColor: "#f9f9f9",
//                 height: 60,
//             }
//         }}>
//         <Tab.Screen name="Drawer" component={DrawerNavigator}
//             options={{
//                 headerShown: false,
//                 tabBarIcon: ({ focused }) => {
//                     return (
//                         <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                             <MaterialIcons name="home" size={25}
//                                 color={focused ? activeTabColor : nonActiveTabColor}
//                             ></MaterialIcons>
//                             {focused ?
//                                 <Text style={{
//                                     color: focused ? activeTabColor : nonActiveTabColor,
//                                     fontSize: 12
//                                 }}>Home</Text>
//                                 : null}
//                         </View>
//                     )
//                 },
//             }} />
//     </Tab.Navigator>
// )


const styles = StyleSheet.create({})