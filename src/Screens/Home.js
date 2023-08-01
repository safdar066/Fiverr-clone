import React, { useState } from "react";
import { 
    Text, 
    View, 
    StyleSheet, 
    ScrollView, 
    Dimensions, 
    TouchableOpacity
 } from 'react-native';
import Head from "../Components/Header";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const Home = () => {

const [show, setShow] = useState(false)
    return (
        <View style={styles.container}>
            <Head />
            <ScrollView>
                <View style={styles.perfomanceContainer}>
                    <View style={styles.doing}>
                        <Text style={styles.doingText}>Here's how you're doing</Text>
                        <Feather name="help-circle" size={24} color="white" />
                    </View>
                    <View style={styles.sellerPerfomance}>
                        <Text style={styles.innerText}>Seller level</Text>
                        <Text style={styles.innerText2}>Level One Seller</Text>
                    </View>
                    <View style={styles.sellerPerfomance}>
                        <Text style={styles.innerText}>Next evaluation</Text>
                        <Text style={styles.innerText2}>Jan 15, 2022</Text>
                    </View>
                    <View style={styles.sellerPerfomance}>
                        <Text style={styles.innerText}>Response time</Text>
                        <Text style={styles.innerText2}>1 Hour</Text>
                    </View>
                    <View style={styles.sellercirclePerfomance}>
                        <TouchableOpacity>
                            <View>

                                <View style={styles.CircleContainer}>
                                    <Text style={styles.innercircleText}>100%</Text>
                                </View>
                                <Text style={styles.belowcircleText}>Response</Text>
                                <Text style={styles.belowcircleText}>rate</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>

                                <View style={styles.CircleContainer}>
                                    <Text style={styles.innercircleText}>100%</Text>
                                </View>
                                <Text style={styles.belowcircleText}>Order</Text>
                                <Text style={styles.belowcircleText}>completion</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>

                                <View style={styles.CircleContainer}>
                                    <Text style={styles.innercircleText}>100%</Text>
                                </View>
                                <Text style={styles.belowcircleText}>On-time</Text>
                                <Text style={styles.belowcircleText}>delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>

                                <View style={styles.CircleContainer}>
                                    <Text style={styles.innercircleText}>5.0</Text>
                                </View>
                                <Text style={styles.belowcircleText}>Posative</Text>
                                <Text style={styles.belowcircleText}>rating</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <View style={styles.verticalline}></View>
                    <TouchableOpacity
                    onPress={()=>setShow(!show)}
                    style={[styles.doing, styles.reachmargin]}>
                        <Text style={styles.doingText}>Reach Your next level</Text>
                        <Entypo name="chevron-down" size={24} color="white"
                            style={styles.text2}
                        />
                    </TouchableOpacity>

                </View>
                {
                    show?
                    <View style={styles.nextlevelrequirements}>
                    <View style={{ marginHorizontal: 10, marginVertical: 12, borderBottomWidth: 1, borderColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Selling seniority</Text>
                            <Text style={{ color: '#39a76f', fontWeight: 'bold' }}>120 / 120</Text>
                        </View>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>Complete at least 120 days as a Level</Text>
                        <Text style={{ color: '#adacaa', fontSize: 13, marginBottom: 18, }}>One Seller.</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 12, borderBottomWidth: 1, borderColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Order</Text>
                            <Text style={{ color: '#39a76f', fontWeight: 'bold' }}>50 / 50</Text>
                        </View>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>Recieve and complete at least 50</Text>
                        <Text style={{ color: '#adacaa', fontSize: 13, marginBottom: 18, }}>Order(all time).</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 12, borderBottomWidth: 1, borderColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Earnings</Text>
                            <Text style={{ color: '#39a76f', fontWeight: 'bold' }}>$2,000 / $2,000</Text>
                        </View>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>Earn at least $2,000 from completed</Text>
                        <Text style={{ color: '#adacaa', fontSize: 13, marginBottom: 18, }}>orders (all time).</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, marginVertical: 12, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Days without  warnings</Text>
                            <Text style={{ color: '#39a76f', fontWeight: 'bold' }}>30 / 30</Text>
                        </View>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>Avoid receiving warnings for TOS</Text>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>violations over the course of 30</Text>
                        <Text style={{ color: '#adacaa', fontSize: 13, }}>days.</Text>
                    </View>
                </View>:
                <View/>
                }

                <View style={styles.earningsContainer}>
                    <Text style={styles.earningtext}>Earnings</Text>
                    <Text style={styles.detailstext}>Details</Text>

                </View>
                <View style={styles.earngsDetailsContainer}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 17, marginTop: 15, marginBottom: 9
                    }}>
                        <Text>Personal balance</Text>
                        <Text>Earnings in December</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 91, marginBottom: 13,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#47c08b', }}>$1,555</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$3,175</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 70, marginTop: 1, marginBottom: 9
                    }}>
                        <Text>Avg. selling price</Text>
                        <Text>Active Orders</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 62, marginBottom: 13,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>$405</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>4 <Text style={{ color: '#645a56' }}>($1,175)</Text></Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 56, marginTop: 1, marginBottom: 9
                    }}>
                        <Text>Pending clearance</Text>
                        <Text>Cancelled Order</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between', marginHorizontal: 10, marginRight: 78, marginBottom: 13,
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>$840</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>2 <Text style={{ color: '#645a56' }}>($740)</Text></Text>
                    </View>
                    <View style={{ marginVertical: 20, height: 43 }}><Text style={styles.earningtext}>To-dos</Text>
                    </View>
                </View>

                <View style={styles.unreadContainer}>
                    <Text style={{ marginHorizontal: 14, fontWeight: 'bold', marginTop: 10, }}>0 unread messages</Text>
                    <View style={styles.unradMsg}>
                        <Text>Your response time is great. Kick</Text>
                        <Text style={{ borderColor: '#7a716e', borderWidth: 1, height: 22, width: 40, borderRadius: 50, paddingLeft: 15, }}>0</Text>
                    </View>
                    <Text style={{ marginHorizontal: 14, }}>Back and relax!</Text>

                </View>
                <View style={{ marginHorizontal: 18, height: 43 }}><Text style={styles.earningtext}>My Gigs</Text>
                </View>

                <View style={styles.mygigsState}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, marginVertical: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Statistics</Text>
                        <Text style={{ fontWeight: 'bold' }}>Last 7 days</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, }}>
                        <Text>
                            Impressions
                        </Text>
                        <Text >3.2 k   <FontAwesome5 name="arrow-up" size={14} color="#47c08b" /></Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, marginTop: 10 }}>
                        <Text>
                            Clicks
                        </Text>
                        <Text >271    <FontAwesome5 name="arrow-up" size={14} color="#47c08b" /></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    perfomanceContainer: {
        height: 412,
        backgroundColor: '#1d1d1d',
        width: Dimensions.get('window').width,
    },
    doing: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 14,
        marginHorizontal: 10,
    },
    doingText: {
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    },
    sellerPerfomance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
        marginHorizontal: 10,
    },
    innerText: {
        color: 'white'
    },
    innerText2: {
        color: 'white',
        fontWeight: 'bold',
    },
    innercircleText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    belowcircleText: {
        color: 'white',
        fontSize: 13,
        alignSelf: 'center',
        marginVertical: 1,

    },
    CircleContainer: {
        borderColor: '#39a76f',
        borderWidth: 2.3,
        height: 66,
        width: 66,
        borderRadius: 33,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2
    },
    sellercirclePerfomance: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 22,
    },
    verticalline: {
        height: 0.8,
        backgroundColor: '#6e6d6d',
        marginTop: 33,
    },
    nextlevelrequirements: {
        height: 400,
        backgroundColor: '#1d1d1d',
        width: Dimensions.get('window').width,
    },
    earningsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 23,
        marginHorizontal: 8,
    },
    earningtext: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    detailstext: {
        color: '#47c08b',
        fontWeight: 'bold'
    },
    earngsDetailsContainer: {
        height: 230,
        marginHorizontal: 14,
        borderRadius: 7,
        shadowColor: "black",
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 15,
    },
    unreadContainer: {
        height: 80,
        marginHorizontal: 14,
        borderRadius: 7,
        shadowColor: "black",
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 15,
        marginTop: 40,

    },
    unradMsg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 14,

    },
    mygigsState: {
        height: 110,
        marginHorizontal: 14,
        borderRadius: 7,
        shadowColor: "black",
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 15,
    }



});
export default Home;