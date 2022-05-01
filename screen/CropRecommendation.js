import { View, Text, StyleSheet,TextInput,ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { database } from "../database/firebaseRealtime";


const CropRecommendation = () => {
    const [nitrogen, setNitrogen] = useState(0)
    const [pottasium, setPottasium] = useState(0)
    const [phosphorus, setPhosphorus] = useState(0)
    const [temperature, setTemperature] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [ph, setPh] = useState(0)
    const [rainfall, setRainfall] = useState(0)
    const [code, setCode] = useState('')
    const [crop, setCrop] = useState(null)

    useEffect(()=>{
        console.log("useEffect", rainfall, temperature, humidity)
    },[rainfall, temperature, humidity])

    return (
        <ScrollView>
            <Text>CropRecommendation</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNitrogen}
                value={nitrogen}
                placeholder="nitrogen"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPottasium}
                value={pottasium}
                placeholder="pottasium"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPhosphorus}
                value={phosphorus}
                placeholder="phosphorus"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setTemperature}
                value={temperature}
                placeholder="temperature"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setHumidity}
                value={humidity}
                placeholder="humidity"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPh}
                value={ph}
                placeholder="PH"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={setRainfall}
                value={rainfall}
                placeholder="rainfall"
                keyboardType="numeric"
            />
            <TouchableOpacity
                onPress={()=>{
                    let arr = [nitrogen, phosphorus, pottasium, temperature, humidity, ph, rainfall]
                    let url="http://10.0.0.59:8080/crop"
                    console.log(JSON.stringify({
                        "input":arr
                    }))
                    fetch(url,{
                        method:'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "input":arr
                        })
                    })
                    .then(response=>response.json())
                    .then(data=>{
                        console.log(data)
                        setCrop(data.crop)
                    })
                    .catch(err=>console.log(err))
                }}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
            <View>
            <TextInput
                style={styles.input}
                onChangeText={setCode}
                value={code}
                placeholder="code"
            />
            <TouchableOpacity
                onPress={()=>{
                    console.log("code:", code)
                    database.ref('Sensors').child(code).on('value', snapshot=>{
                        let data = snapshot.val()
                        if(data){
                            console.log(data)
                            setHumidity(data.humidity)
                            setTemperature(data.temperature)
                            setRainfall(data.water)
                        }
                        else{
                            console.log("wrong code")
                        }
                    })
                }}
            >
                <Text>Fetch Sensor Data</Text>
            </TouchableOpacity>
            {   crop && <Text>Recommended Crop: {crop}</Text>}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default CropRecommendation