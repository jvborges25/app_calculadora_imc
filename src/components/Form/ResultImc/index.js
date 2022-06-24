import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"

export default function ResultImc(props){

  const onShare = async () => { 
    const result = await Share.share({ 
      message:"Meu imc é: " + props.resultImc,
    })
  }

  return(
    <View style={styles.contextImc}>
      <view style={styles.boxSharebutton}>
        {props.result != null ?
        <TouchableOpacity onPress={onShare} style={styles.shared}>
          <text style={styles.sharedText}>Share</text>
        </TouchableOpacity>
        :
        <view/>
        }
      </view>
      <Text style={styles.titleResultImc}>{props.messageResultImc}</Text>  
      <Text style={styles.ResultImc}>{props.ResultImc}</Text>
    </View>
    )
}
