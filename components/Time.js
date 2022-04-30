import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, {useEffect, useState} from 'react'


const Time = (props) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const removeItem = props.removeItem;
  const identifier = props.identifier;

  useEffect(()=>{
    if(props.hours && props.min){
      setHours(props.hours)
      setMinutes(props.min)
      console.log(props.hours, props.min)
    }
  },[])

  useEffect(()=>{
    let time = hours+":"+minutes
    console.log("time in Time",time)
    props.updateTime(identifier, time)
  },[hours,minutes])
  return (
    <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder="Hour"
          keyboardType='numeric'
          onChangeText = {setHours}
          value={hours}
        />
        <TextInput
          style={styles.input}
          placeholder="Minuite"
          keyboardType='numeric'
          onChangeText={setMinutes}
          value={minutes}
        />
        <Button
            title="Remove"
            color="#841584"
            accessibilityLabel="Remove times"
            onPress={()=>{
              removeItem(identifier)
            }}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  main:{
    borderWidth:2,
  }
})
export default Time