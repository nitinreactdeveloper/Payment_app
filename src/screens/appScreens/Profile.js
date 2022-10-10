import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import Button from '../../components/Button'

const Profile = ({ navigation }) => {

    return (
        <BaseScreen title={'Profile'} navigation={navigation}
            renderChild={Content({ navigation, })}
        // paddingTop={false}
        // paddingHorizontal ={false}
        />
    )
}

const Content = ({ navigation, }) => {
    const [username, setUsername] = useState("Nitin")
    const [email, setEmail] = useState('xyz@gmail.com')
    const { logout } = useContext(AuthContext)

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
            <View style={styles.UserProfile}>
                <View style={{
                    width: '40%',
                    borderRadius: 90,
                    alignItems: 'center',
                    height: 120
                }}>
                    <MaterialIcons name="person" size={100} color={'#000'}></MaterialIcons>
                </View>
                <Text style={{
                    textAlign: 'center',
                    width: '50%',
                    fontSize: 30,
                    paddingBottom: 20,
                    fontWeight: '600',
                    color: '#000',
                }}>
                    {username}
                </Text>

            </View>

            <Text style={{
                width: '100%',
                paddingHorizontal: 20,
                borderRadius: 20,
                fontSize: 20,

            }}>
                {email}
            </Text>
            <TouchableOpacity style={{
                borderWidth: 2,
                borderRadius: 20,
                padding: 5,
                alignItems: 'center',
                marginHorizontal: 15,
                marginVertical: 10
            }}>
                <Text>
                    Edit Profile
                </Text>
            </TouchableOpacity>

            <View  style={styles.dashBoard}>
                <Text style={{fontSize: 16,}}>
                    Dashboard
                </Text>
                <TouchableOpacity style={styles.dashboardContet}>
                    <MaterialIcons name="payments" size={40} color={'green'}></MaterialIcons>
                    <Text style={styles.dashboardTextContet}>Payments</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30}></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardContet}>
                    <MaterialIcons name="announcement" size={40} color={'green'}></MaterialIcons>
                    <Text style={styles.dashboardTextContet}>Achievements</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30}></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dashboardContet}>
                    <MaterialIcons name="privacy-tip" size={40} color={'green'}></MaterialIcons>
                    <Text style={styles.dashboardTextContet}>Privacy</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={30}></MaterialIcons>
                </TouchableOpacity>
            </View>

            <Button title={'Logout'} width={'100%'} onPress={() => logout()} />
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    UserProfile: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dashboardContet:{
        flexDirection:'row',
        justifyContent:'space-between',
        width: '100%',
        backgroundColor: '#f4ebeb',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
        margin: 8   
    },
    dashboardTextContet:{
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 18,
        fontWeight:'400'
    },
    dashBoard:{
        // backgroundColor: 'green',
        padding: 20,
    }
})