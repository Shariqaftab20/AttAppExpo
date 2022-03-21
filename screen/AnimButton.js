import * as React from 'react';
import {StyleSheet,View , Image} from 'react-native';
import { FloatingAction } from "react-native-floating-action";

const _color='#6E01EF';
const _size=100;

const AnimButton =()=>{
    const actions = [
        {
          text: "Accessibility",
          icon: require("../assets/images/dark-phoenix-logo-png-3.png"),
          name: "bt_accessibility",
          position: 2
        },
        {
          text: "Language",
          icon: require("../assets/images/dark-phoenix-logo-png-3.png"),
          name: "bt_language",
          position: 1
        },
        {
          text: "Location",
          icon: require("../assets/images/dark-phoenix-logo-png-3.png"),
          name: "bt_room",
          position: 3
        },
        {
          text: "Video",
          icon: require("../assets/images/dark-phoenix-logo-png-3.png"),
          name: "bt_videocam",
          position: 4
        }
      ];
    return <View style={{ flex:1,alignItems:'center', justifyContent:'center'}}>
        <View style={[styles.dot,styles.center]}>
            <Image
                source={require("../assets/images/dark-phoenix-logo-png-3.png")}
                resizeMode="cover"
                style={{ width:500,height:900,opacity:0.5}}
            />
          <FloatingAction
            actions={actions}
            onPressItem={name => {
            console.warn(`selected button: ${name}`);
                }}
            />  
        </View>
    </View>
};

const styles=StyleSheet.create({
    dot:{
        flex:1,
        width: _size,
        height:_size,
        borderRadius:_size,
        alignContent:'flex-end'
  
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    }
});

export default AnimButton;
