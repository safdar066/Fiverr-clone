import react from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const AccountScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.dpbackgroundComtainer}>
                <View style={styles.bellIconContainer}>
                    <View>

                    </View>
                    <Feather name="bell" size={24} color="white" />
                </View>
                <View style={styles.accountInfo}>
                    <View style={styles.dponline}>
                        <Image
                            source={require('../Images/a.jpg')}
                            style={styles.picstyle}
                        />
                        < View style={styles.onlinecontainer}>
                        </View>
                    </View>
                    <View style={styles.accountTextdetails}>
                        <Text style={styles.userNameText}>safdar066</Text>
                        <View style={styles.accountBalnceContainer}>
                            <Text style={{ color: 'white' }}>Personal balance:</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>$1,555</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.sellerMode}>
                <Text style={{ fontWeight: 'bold' }}>Seller mode</Text>
                <MaterialCommunityIcons name="toggle-switch-outline" size={32} color="#39a76f" />
            </View>
            <ScrollView>
                <View style={styles.sellingContainer}>
                    <Text style={styles.sellingText}>Selling</Text>
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <Foundation name="dollar" size={24} color="#949292"
                            style={{ marginLeft: 13, }}
                        />
                        <Text style={styles.earnigText}>Earnings</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <MaterialCommunityIcons name="flash-outline" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Custom offer templates</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <Feather name="share-2" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Share Gigs</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <FontAwesome5 name="user" size={24} color="#949292" />
                        <Text style={styles.earnigText}>My profile</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <MaterialIcons name="list-alt" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Manage Gigs</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <MaterialIcons name="event-available" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Availability</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <Entypo name="slideshare" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Invite friends</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.sellingContainer}>
                    <Text style={styles.settingText}>Settings</Text>
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <Ionicons name="ios-settings-outline" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Preferences</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <MaterialIcons name="switch-account" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Account</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.sellingContainer}>
                    <Text style={styles.settingText}>Resources</Text>
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <FontAwesome name="support" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Support</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <MaterialCommunityIcons name="chat-question-outline" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Community and legal</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.earningcontainer}>
                    <View style={styles.dollaricons}>
                        <Feather name="thumbs-up" size={24} color="#949292" />
                        <Text style={styles.earnigText}>Feedback</Text>
                    </View>
                    <FontAwesome name="angle-right" size={24} color="#949292"
                        style={{ marginRight: 20, }} />
                </View>
                <View style={styles.versionDetails}>
                    <Text style={styles.versionText}>3.6.7</Text>
                </View>

            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    dpbackgroundComtainer: {
        height: 195,
        backgroundColor: '#1d1d1d'
    },
    bellIconContainer: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        marginRight: 16,
    },
    accountInfo: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center'
    },
    picstyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute'
    },
    onlinecontainer: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#39a76f',
        marginLeft: 45,
        marginTop: 44,
        borderWidth: 2,
        borderColor: 'white',

    },
    accountTextdetails: {
        marginLeft: 18,
    },
    userNameText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19
    },
    accountBalnceContainer: {
        flexDirection: 'row'
    },
    sellerMode: {
        height: 46,
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 6,
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        shadowOpacity: 0.8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        alignItems: 'center',
        marginTop: -25,

    },
    sellingContainer: {
    },
    sellingText: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 45,
        marginBottom: 22,
        marginHorizontal: 10,

    },
    settingText: {
        fontWeight: '500',
        fontSize: 20,

        marginVertical: 22,
        marginHorizontal: 10,

    },
    earningcontainer: {
        height: 60,
        backgroundColor: 'white',
        shadowColor: "#adadad",
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 0.6,
        elevation: 1,
        shadowOpacity: .3,
        alignContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 1,
    },
    dollaricons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    earnigText: {
        fontWeight: '600',
        marginLeft: 16
    },
    versionText: {
        color: "#949292",
        marginVertical: 22,
        alignSelf: 'center',
        fontSize: 12,
    }
});
export default AccountScreen;
