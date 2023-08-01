import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const Head=()=>{
    return (
        <View style={styles.upperContainer}>
            <Text style={styles.textStyle}>safdar066</Text>
            <Image 
            resizeMode="contain"
            source={require('../Images/a.jpg')}
            style={styles.imageStyle}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
upperContainer:{
    backgroundColor: 'white',
    height: 64,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 14,
    borderColor: '#dbdad7',
    borderBottomWidth: 0.26,
    shadowOpacity:0.2

},
imageStyle:{
    height:28,
    width: 28,
    borderRadius: 20,
},
textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
}


});
export default Head;