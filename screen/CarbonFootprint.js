import React, { useState } from "react";
import { Text,View, Picker, StyleSheet, TextInput,SafeAreaView, Button, Alert} from "react-native";

const Carbon = () => {
  const [selectedValue, setSelectedValue] = useState("0");
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(0);
  return (
    <SafeAreaView >
      <View >
      <TextInput
        onValueChange={(value) => {
          console.log(value)
          onChangeNumber(value)
        }}
        style={styles.txt}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="How Many Acres?"
        keyboardType="numeric"
        />
      </View>
      <View>
      <Text style={styles.text} >CO2 Emmision Per Acre :  {selectedValue} lbs CO2e/acre</Text>
      <Text style={styles.text} > Total Acres : {number}</Text>
      <Text style={styles.text} >Total CO2 Emmision : {selectedValue*number} lbs CO2e/acre</Text>
     </View>
      <View style={styles.container}>
      <Picker
        placeholder={{ label: "What is your crop?", value: null }}
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Cotton" value="3378" />  
        <Picker.Item label="Corn" value="4744" />
        <Picker.Item label="Wheat" value="2676" />  
        <Picker.Item label="Peanuts" value="2363" />
      </Picker>
      </View>


    <View>

      {/* <Button title="ENTER"
      onPress={()=>console.log(selectedValue," acres:", number)}
      borderWidth="3">
      </Button> */}

    
     
  
    </View>
    
        
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
    
  },
  txt:{
    color: "black",
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 15,
        marginTop: 20,
        width: "100%",
        fontSize: 15,
        fontFamily: "monospace",
  },
  text:{
    color:'green'
  }
  
});

export default Carbon;