import React, {Component, useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  Linking,ImageBackground,
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import Icon, { Icons } from "../components/Icons";
import { Button,  } from 'react-native-web';
import { auth } from '../database/firebase';
import { useNavigation } from '@react-navigation/native';
import Carbon from './CarbonFootprint';
import {
	useFonts,
	AlegreyaSans_100Thin,
	AlegreyaSans_100Thin_Italic,
	AlegreyaSans_300Light,
	AlegreyaSans_300Light_Italic,
	AlegreyaSans_400Regular,
	AlegreyaSans_400Regular_Italic,
	AlegreyaSans_500Medium,
	AlegreyaSans_500Medium_Italic,
	AlegreyaSans_700Bold,
	AlegreyaSans_700Bold_Italic,
	AlegreyaSans_800ExtraBold,
	AlegreyaSans_800ExtraBold_Italic,
	AlegreyaSans_900Black,
	AlegreyaSans_900Black_Italic,
} from "@expo-google-fonts/alegreya-sans";
function Example(props) {
  let [fontsLoaded] = useFonts({
		AlegreyaSans_100Thin,
		AlegreyaSans_100Thin_Italic,
		AlegreyaSans_300Light,
		AlegreyaSans_300Light_Italic,
		AlegreyaSans_400Regular,
		AlegreyaSans_400Regular_Italic,
		AlegreyaSans_500Medium,
		AlegreyaSans_500Medium_Italic,
		AlegreyaSans_700Bold,
		AlegreyaSans_700Bold_Italic,
		AlegreyaSans_800ExtraBold,
		AlegreyaSans_800ExtraBold_Italic,
		AlegreyaSans_900Black,
		AlegreyaSans_900Black_Italic,
	});
  const navigation = useNavigation();
  const cropBG = require("../assets/cropBG.jpg");

  const handleAboutUsClick = () => {
    Linking.openURL('https://devpost.com/software/osiris-cxf4b2');
  }
  const onSubmit = formFields => {
    // Actions on submit button click.
    console.log(JSON.stringify(formFields));
    let url="https://hygia12.herokuapp.com/prob"
    fetch(url,{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formFields)
    })
    .then(response=>{
      console.log("response received")
      //console.log("response",response.json())
      return response.json()
    })
    .then(data=>console.log(data))
    .catch(error=>{
      console.log("error",error)
    })
  }
  if (!fontsLoaded) {
		return null;
	} else {
        console.log("fonts",fontsLoaded)
		return ( <> 
    <ImageBackground
            source={cropBG}
            resizeMode="cover"
            style={styles.BG}
        >
    <View style={styles.container}>
    <Text style={styles.title}>Carbon Footprint</Text>
      <ScrollView style={styles.survey}>
        {/* <View style={styles.surveyHeader}>
          <Text style={styles.surveyText}>Carbon Footprint</Text>
          <Icon
                  type={Icons.Ionicons}
                  name={"arrow-down-outline"}
                  style={styles.arrowIcon}
                />
        </View> */}
        <Carbon/>
      </ScrollView>
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.signOut}
        onPress={()=>{
          auth.signOut().then(()=>{
            console.log("sigged out")
            navigation.navigate('Login')
          })
          .catch(error=>console.log(error))
        }}
      >
          <Text style={styles.signOutText} >Sign Out</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.aboutUs}
        onPress={handleAboutUsClick}>
          <Text style={styles.aboutUsText} >About Us</Text>
      </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
    </>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent:"center",
    // alignItems:"center",
    // justifyContent:"center",
  },
  BG: {
    flex: 1,
    justifyContent: "center",
},
  buttons:{
    flexDirection: 'row',
    marginBottom: 90,
    justifyContent: "center",
  },
  title: {
		fontSize: 30,
		alignItems: "center",
    marginTop:58,
  marginLeft:"25%",
    		// fontWeight: "bold",
		fontFamily: "AlegreyaSans_700Bold",
	},
  signOut:{
    flex: 1,
    margin: 10,
    backgroundColor: '#F14D42',
    borderRadius: 15,
  },
  signOutText:{
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  aboutUs:{
    flex: 1,
    margin: 10,
    backgroundColor: '#AEAFF7',
    borderRadius: 15,
  },
  aboutUsText:{
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
  },
  surveyHeader:{
    flexDirection: 'row',
    alignContent:"center",alignItems:"center"
  },
  surveyText:{
    marginLeft:7,
    fontSize: 30,
    // fontWeight: 'bold',
    fontFamily: "AlegreyaSans_700Bold",
  },
  arrowIcon:{
    marginRight: 10,
    marginLeft: 'auto',  
  },
  survey:{
    backgroundColor: "#e0e0e0",
    margin: 10,
    marginTop: 20,
    borderRadius: 25,
    padding: 10,
  }
});

export default Example;