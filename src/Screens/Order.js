import react from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

const DATA = [
    {
      id: "1",
      gigPic: require('../Images/gig1.jpg'),
      orderPrice: "$550",
      gigTitle1: "Develop your android and IOS app",
      gigTitle2: "using react native or expo",
      clientsPic:require('../Images/client7.jpg'),
      clientcurrentName:"sarrah098",
      completionDate:"Dec 23, 2022",
    },
    {
        id: "2",
        gigPic: require('../Images/gig2.jpg'),
        orderPrice: "$670",
        gigTitle1: "convert website to android app",
        gigTitle2: "using react native or expo",
        clientsPic:require('../Images/client6.jpg'),
        clientcurrentName:"ahmaddev01",
        completionDate:"Dec 22, 2022",
      },
      {
        id: "3",
        gigPic: require('../Images/gig3.jpg'),
        orderPrice: "$1050",
        gigTitle1: "develop customize food delivery",
        gigTitle2: "app in react native or expo",
        clientsPic:require('../Images/client5.jpg'),
        clientcurrentName:"alex786u",
        completionDate:"Dec 19, 2022",
      },
      {
        id: "4",
        gigPic: require('../Images/gig4.jpg'),
        orderPrice: "$1256",
        gigTitle1: "develop a custom ecommerce",
        gigTitle2: "using react native",
        clientsPic:require('../Images/user.jpg'),
        clientcurrentName:"williumson099",
        completionDate:"Dec 17, 2022",
      },
      {
        id: "5",
        gigPic: require('../Images/gig5.jpg'),
        orderPrice: "$1090",
        gigTitle1: "Develop your android and IOS app",
        gigTitle2: "using react native or expo",
        clientsPic:require('../Images/client4.jpg'),
        clientcurrentName:"brianna_tech",
        completionDate:"Dec 16, 2022",
      },
      {
        id: "6",
        gigPic: require('../Images/gig6.jpg'),
        orderPrice: "$490",
        gigTitle1: "Develop your android and IOS app",
        gigTitle2: "using react native",
        clientsPic:require('../Images/client3.jpg'),
        clientcurrentName:"stephan_apps",
        completionDate:"Dec 13, 2022",
      },
      {
        id: "7",
        gigPic: require('../Images/gig1.jpg'),
        orderPrice: "$860",
        gigTitle1: "Develop your android and IOS app",
        gigTitle2: "using react native or expo",
        clientsPic:require('../Images/client2.jpg'),
        clientcurrentName:"kyalla01",
        completionDate:"Dec 08, 2022",
      },
      {
        id: "8",
        gigPic: require('../Images/gig3.jpg'),
        orderPrice: "$1650",
        gigTitle1: "develop customize food delivery",
        gigTitle2: "app in react native or expo",
        clientsPic:require('../Images/client5.jpg'),
        clientcurrentName:"alex786u",
        completionDate:"Dec 08, 2022",
      },
      {
        id: "9",
        gigPic: require('../Images/gig4.jpg'),
        orderPrice: "$1164",
        gigTitle1: "develop a custom ecommerce",
        gigTitle2: "using react native",
        clientsPic:require('../Images/user.jpg'),
        clientcurrentName:"williumson099",
        completionDate:"Dec 07, 2022",
      },
      {
        id: "10",
        gigPic: require('../Images/gig5.jpg'),
        orderPrice: "$860",
        gigTitle1: "Develop your android and IOS app",
        gigTitle2: "using react native or expo",
        clientsPic:require('../Images/client4.jpg'),
        clientcurrentName:"brianna_tech",
        completionDate:"Dec 05, 2022",
      },
    
  ];
const Order = () => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headinTextStyle}>Manage orders</Text>
                <View style={{ flexDirection: 'row', }}>
                    <Feather name="bell" size={22} color="black"
                        style={{ marginRight: 15 }} />
                    <Octicons name="filter" size={22} color="black" />
                </View>
            </View>
            <FlatList
        data={DATA}
        renderItem={({item})=>(
            <TouchableOpacity>
            <View style={styles.orderMainContainer}>
                <View style={styles.gigsInfoContainer}>
                    <Image
                        source={item.gigPic}
                        style={styles.gigImagestyle}
                    />
                    <View style={styles.gigTextContainer}>
                        <Text style={styles.orderPriceText}>{item.orderPrice}</Text>
                        <Text style={styles.gigTitleText}>{item.gigTitle1}</Text>
                        <Text style={styles.gigTitleText}>{item.gigTitle2}</Text>
                    </View>
                </View>
                <View style={styles.clientprofileandorderinfo}>
                    <View style={styles.clientsinfo}>
                        <Image
                            source={item.clientsPic}
                            style={styles.clientPicStyle}
                        />
                        <Text style={styles.clientsName}>{item.clientcurrentName}</Text>
                    </View>
                    <View style={styles.ordercompletedContainer}>
                        <Text style={styles.ordercompletedText}>COMPLETED</Text>
                    </View>
                </View>
                <View style={styles.ordercompletedDate}>
                    <Text style={styles.dateStyle}>{item.completionDate}</Text>
                    <SimpleLineIcons name="options-vertical" size={18} color="black" />
                </View>
            </View>
        </TouchableOpacity>
        )
        }
        keyExtractor={(item) => item.id}
      />
           
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
flex:1,
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
    orderMainContainer: {
        height: 156,
        margin: 15,
        borderRadius: 7,
        shadowColor: 'black',
        shadowOffset: {
            height: 1,
            width: 1
        },
        shadowRadius: 5,
        elevation: 3,
        backgroundColor: 'white',
        shadowOpacity: 0.8,
    },
    gigsInfoContainer: {
        flexDirection: 'row'
    },
    gigImagestyle: {
        height: 60,
        width: 83,
        margin: 10,
        borderRadius: 5,
    },
    orderPriceText: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    gigTitleText: {
        color: '#4a4848'

    },
    clientprofileandorderinfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.27,
        borderBottomColor: '#f0f0f0'
    },
    clientsinfo: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginBottom: 10,
    },
    clientPicStyle: {
        height: 24,

        width: 24,
        borderRadius: 12,
        marginRight: 12,
    },
    ordercompletedContainer: {
        height: 17,
        width: 66,
        borderRadius: 4,
        backgroundColor: '#e4f5e7',
        marginRight: 10,
    },
    clientsName: {
        color: '#6e6b6b'
    },
    ordercompletedText: {
        fontSize: 10,
        alignSelf: 'center',
        color: '#185e23'
    },
    ordercompletedDate: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    dateStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});
export default Order;
