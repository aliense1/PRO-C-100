import React, {Component} from "react"
import {View, Text, StyleSheet} from "react-native"
import { TouchableOpacity } from "react-native-web"


export default class CreateStory extends React.Component{

  render(){
    return (
      <View>
        <TouchableOpacity style={styles.homeBtn}>Start Cubing</TouchableOpacity>
        <TouchableOpacity>OLL(Grand Master)</TouchableOpacity>
        <TouchableOpacity>PLL(Legendary)</TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeBtn : {
   alignItems :center
  }
 })