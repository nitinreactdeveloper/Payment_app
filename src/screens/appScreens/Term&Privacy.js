import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, PixelRatio, TextInput, Image, ScrollView, ImageBackground, Dimensions } from 'react-native'

import { AuthContext } from '../../navigation/AuthProvider'
import BaseScreen from '../../components/BaseScreen'



const themeColor = '#F5CF04'



const Term_privacyScreen = ({ navigation }) => {
    return (
        <BaseScreen
            title={"Term & Condition"}
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

            <Text style={{ fontSize: 24, fontWeight: '600' , color: '#000'}}>   Terms and Conditions</Text>

            <Text style={{ fontSize: 24, fontWeight: '600', color: '#000' }}> Welcome to techniza.in! </Text>
            <Text style={{ color: '#000'}}>
                These terms and conditions outline the rules and regulations for the use of Techninja's Website, located at techninza.in.
            </Text>
            <Text style={{color: '#000'}}>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use techniza.in if you do not agree to take all of the terms and conditions stated on this page.
            </Text>
            <Text style={{color:'#000'}}>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </Text>
            <Text style={{ fontSize: 30, color:'#000' }}>
                Cookies
            </Text>
            <Text style={{color:'#000'}}>
                We employ the use of cookies. By accessing techniza.in, you agreed to use cookies in agreement with the Techninja's Privacy Policy.
            </Text>
            <Text style={{color:'#000'}}>
                Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </Text>
            <Text style={{ fontSize: 30, color:'#000' }}>
                License
            </Text>
            <Text style={{color:'#000'}}>
                Unless otherwise stated, Techninja and/or its licensors own the intellectual property rights for all material on techniza.in. All intellectual property rights are reserved. You may access this from techniza.in for your own personal use subjected to restrictions set in these terms and conditions.
            </Text>
            <Text style={{ fontSize: 30, color:'#000' }}>
                You must not:
            </Text>
            <Text style={{color:'#000'}}>
                Republish material from techniza.in
            </Text>
            <Text style={{color:'#000'}}>
                Sell, rent or sub-license material from techniza.in
            </Text>
            <Text style={{color:'#000'}}>
                Reproduce, duplicate or copy material from techniza.in
            </Text>
            <Text style={{color:'#000'}}>

                Redistribute content from techniza.in
            </Text>
            <Text style={{color:'#000'}}>

                This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the Free Terms and Conditions Generator.
            </Text>
            <Text style={{color:'#000'}}>
                Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Techninja does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Techninja,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Techninja shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </Text>
            <Text style={{color:'#000'}}>
                Techninja reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </Text>
            <Text style={{ fontSize: 30, color:'#000' }}>
                You warrant and represent that:
            </Text>
            <Text style={{color:'#000'}}>
                You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</Text>
            <Text style={{color:'#000'}}> The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</Text>
            <Text style={{color:'#000'}}> The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</Text>
            <Text style={{color:'#000'}}> The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</Text>
            <Text style={{color:'#000'}}>
                You hereby grant Techninja a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
            </Text>
            <Text style={{ fontSize: 30 , color:"#000"}}>
                Hyperlinking to our Content
            </Text>
            <Text style={{ fontSize: 30, color:'#000' }}>
                The following organizations may link to our Website without prior written approval:
            </Text>
            <Text style={{color:'#000'}}>        Government agencies;</Text>
            <Text style={{color:'#000'}}>         Search engines;</Text>
            <Text style={{color:'#000'}}>       News organizations;</Text>
            <Text style={{color:'#000'}}>       Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
            </Text>
            <Text style={{color:'#000'}}>
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
            </Text>

            <Text style={{color:'#000'}}>
                We may consider and approve other link requests from the following types of organizations:
            </Text>
            <Text style={{color:'#000'}}>
                <Text style={{color:'#000'}}>   commonly-known consumer and/or business information sources;</Text>
                <Text style={{color:'#000'}}>    dot.com community sites;</Text>
                <Text style={{color:'#000'}}>    associations or other groups representing charities;</Text>
                <Text style={{color:'#000'}}>    online directory distributors;</Text>
                <Text style={{color:'#000'}}>    internet portals;</Text>
                <Text style={{color:'#000'}}>    accounting, law and consulting firms; and</Text>
                <Text style={{color:'#000'}}>    educational institutions and trade associations.</Text>
                <Text style={{color:'#000'}}>
                    We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Techninja; and (d) the link is in the context of general resource information.
                </Text>
                </Text>
                <Text style={{color:'#000'}}>
                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or app the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature
            </Text>
        </ScrollView>

    )
}

export default Term_privacyScreen

const styles = StyleSheet.create({
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        position: 'relative',
        paddingTop: 10,
        color: '#000'
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