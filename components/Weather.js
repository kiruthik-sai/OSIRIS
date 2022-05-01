import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Weather = (props) => {
    useEffect(()=>{
        console.log("prop",props)
    },[])
  return (
    <View style={styles.container}>
        <Text>{props.day}</Text>
        <Image source={{uri: props.src}} style={{width: 50, height: 50}}/>
        <Text>min: {props.min}</Text>
        <Text>max: {props.max}</Text>
        <Text>{props.comment}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin: 10,
        width: 150,
        height: 170,
        borderRadius: 25,
        padding: 10,
        paddingBottom: 0,
        color: "white",
        borderWidth: 2,
        backgroundColor: "#ADD8E6"
    }
})
export default Weather