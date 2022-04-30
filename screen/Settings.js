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
  Linking,
} from 'react-native';
import DynamicForm from '@coffeebeanslabs/react-native-form-builder';
import Icon, { Icons } from "../components/Icons";
import { Button } from 'react-native-web';
import { auth } from '../database/firebase';
import { useNavigation } from '@react-navigation/native';

function Example(props) {
  const navigation = useNavigation();
  const formTemplate = {
    data: [
      {
        component: 'input-radio',
        field_name: '1',
        is_mandatory: 'true',
        meta: {
          text: 'What is your age?',
          data: [
            {
              label: '18-26',
              value: '18-26'
            },
            {
              label: '26+',
              value: '26+'
            }
          ]
        },
      }
,
      {
        component: 'input-radio',
        field_name: '2',
        is_mandatory: 'true',
        meta: {
          text: 'Do you suffer from back/neck pain?',
          data: [
            {
              label: 'YES',
              value: 'YES'
            },
            {
              label: 'NO',
              value: 'NO'
            }
          ]
        }
      }
,
      {
        component: 'input-radio',
        field_name: '3',
        is_mandatory: 'true',
        meta: {
          text: 'Do you think sometimes your feet or hands tickle, or go numb? [ Neuropathic pain]',
          data: [
            {
              label: 'YES',
              value: 'YES'
            },
            {
              label: 'NO',
              value: 'NO'
            }
          ]
        }
      }
,
{
  component: 'input-radio',
  field_name: '4',
  is_mandatory: 'true',
  meta: {
    text: 'Are you diagnosed with pancreatitis',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '5',
  is_mandatory: 'true',
  meta: {
    text: 'Do you suffer from abdominal pain?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '6',
  is_mandatory: 'true',
  meta: {
    text: 'Do you think you have pain in any other areas of your body that we did not mention?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '7',
  is_mandatory: 'true',
  meta: {
    text: 'Have you used any kind of stimulant drugs like cocaine?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '8',
  is_mandatory: 'true',
  meta: {
    text: 'Do you smoke cigarettes often?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '9',
  is_mandatory: 'true',
  meta: {
    text: 'Are you clinically diagnosed with depression?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '10',
  is_mandatory: 'true',
  meta: {
    text: 'Are you clinically diagnosed with Bipolar Disorder?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component: 'input-radio',
  field_name: '11',
  is_mandatory: 'true',
  meta: {
    text: 'Have you ever been diagnosed with schizophrenia?',
    data: [
      {
        label: 'YES',
        value: 'YES'
      },
      {
        label: 'NO',
        value: 'NO'
      }
    ]
  }
},

{
  component:'input-text',
  field_name:'12',
  is_mandatory:'true',
  meta:{
    label:'How many times have you dispensed extended-release opioid prescriptions in the last month?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'13',
  is_mandatory:'true',
  meta:{
    label:'How many unique pharmacies do you use for dispensing?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'14',
  is_mandatory:'true',
  meta:{
    label:'How many unique prescribers do you have for opioid?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'15',
  is_mandatory:'true',
  meta:{
    label:'How many times have you been hospitalized in the past month?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'16',
  is_mandatory:'true',
  meta:{
    label:'How many times have you used Methadone,Fentanyl, Morphine or Oxycodone in the past month?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'17',
  is_mandatory:'true',
  meta:{
    label:'How many times have you used Hydromorphone in the past month?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'18',
  is_mandatory:'true',
  meta:{
    label:'How many times have you used antidepressants or muscle relaxants in the past month?',
    placeholder:'0-10'
  }
},

{
  component:'input-text',
  field_name:'19',
  is_mandatory:'true',
  meta:{
    label:'Total number of Opioids dispensed',
    placeholder:'0-10'
  }
}

    ]
  }
  const handleAboutUsClick = () => {
    Linking.openURL('https://devpost.com/software/winter-arch#updates');
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.survey}>
        <View style={styles.surveyHeader}>
          <Text style={styles.surveyText}>Survey</Text>
          <Icon
                  type={Icons.Ionicons}
                  name={"arrow-down-outline"}
                  style={styles.arrowIcon}
                />
        </View>
        <DynamicForm formTemplate={formTemplate} onSubmit={onSubmit} />
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    marginBottom: 90,
    justifyContent: "center",
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
  },
  surveyText:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  arrowIcon:{
    marginRight: 10,
    marginLeft: 'auto',  
  },
  survey:{
    backgroundColor: "#e0e0e0",
    margin: 10,
    marginTop: 40,
    borderRadius: 25,
    padding: 10,
  }
});

export default Example;