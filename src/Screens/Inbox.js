import react from "react";
import { Text, View, StyleSheet, Image, FlatList } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DATA = [
    {
        id: "1",
        img: require('../Images/client1.jpg'),
        title: "mikeios",
        desc: "Can you please provide all requirement",
        desc1: "Give me a moment",
        day:"Sunday",
    },
    {
        id: "2",
        img: require('../Images/user.jpg'),
        title: "goseph-rio05",
        desc: "Hey safdar066, Are you available now?",
        desc1: "I need little help.",
        day:"Monday",
    },
    {
        id: "3",
        img: require('../Images/client2.jpg'),
        title: "kyla001",
        desc: "Can we conduct a quick meeting?",
        day:"Wednesday",
    },
    {
        id: "4",
        img: require('../Images/client3.jpg'),
        title: "stephan_apps",
        desc: "Hi safdar066, How r u? Hope you",
        desc1: "doing well",
        day:"Friday",
    },
    {
        id: "5",
        img: require('../Images/client4.jpg'),
        title: "brianna_tech",
        desc: "Can you send me your figma design",
        desc1: "I just need to see all screen in details",
        day:"Sunday",
    },
    {
        id: "6",
        img: require('../Images/client5.jpg'),
        title: "alex768u",
        desc: "Hey safdar066, please give the updates",
        desc1: "of our projects",
        day:"December 20",
    },
    {
        id: "7",
        img: require('../Images/client6.jpg'),
        title: "ahmaddev01",
        desc: "So, how many days you require to complete this projeccts",
        desc1: "",
        day:"December 18",
    },
    {
        id: "8",
        img: require('../Images/user.jpg'),
        title: "williamson009",
        desc: "Lets get started",
        desc1: "",
        day:"December 17",
    },
    {
        id: "9",
        img: require('../Images/client7.jpg'),
        title: "sarrah098",
        desc: "Hey safdar066",
        desc1: "tell me when you will finish work",
        day:"December 11",
    },
];
const Inbox = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headinTextStyle}>Inbox</Text>
                <Octicons name="filter" size={24} color="black" />
            </View>
            <FlatList
                data={DATA}
                renderItem={({item})=>(
                    <View style={styles.clientsManinView}>
                    <View style={styles.profileContainer}>
    
                        <Image
                            style={styles.profilePic}
                            source={item.img}
                            resizeMethod='auto'
                        />
                        <View style={styles.onlineStatus}></View>
                    </View>
                    <View style={styles.clientsChatdetails}>
                        <View style={styles.userNameandDays}>
                            <View style={styles.usernamecontainer}>
                                <Text style={styles.userName}>{item.title}</Text>
                            </View>
                            <View>
                                <Text style={styles.chatdaysDates}>{item.day}</Text>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 8, }}>
                            <Text style={{ fontSize: 14, color: '#6f6f70' }}>{item.desc}</Text>
                            <Text style={{ fontSize: 14, color: '#6f6f70' }}>{item.desc1}</Text>
                        </View>
                    </View>
                </View>
                )}
                
            />
  



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        backgroundColor: 'white',
        height: 64,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 14,
        borderColor: '#dbdad7',
        borderBottomWidth: 0.26,
        shadowOpacity: 0.2

    },

    headinTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    clientsManinView: {

        height: 90,
        flexDirection: 'row',
        borderColor: '#d7d7d9',
        borderBottomWidth: 0.25,

    },
    profileContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    clientsChatdetails: {
        flex: 2.8,
    },
    profilePic: {
        height: 70,
        width: 70,
        borderRadius: 350,
        alignSelf: 'center',
        position: 'absolute'
    },
    onlineStatus: {
        height: 10,
        width: 10,
        backgroundColor: '#39a76f',
        borderRadius: 5,
        marginLeft: 70,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 43
    },
    usernamecontainer: {
        flexDirection: 'row'
    },
    userName: {
        fontWeight: "bold",
        marginRight: 12,
    },
    userNameandDays: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginVertical: 7,
    },
    chatdaysDates: {
        fontSize: 12,
        color: '#6f6f70'
    }


});
export default Inbox;
