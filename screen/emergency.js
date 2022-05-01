// import * as React from "react";
// import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
// import Constants from "expo-constants";
// // import icons from 'react-native-vector-icons'

// // You can import from local files

// // or any pure javascript modules available in npm
// import { Card, Button } from "react-native-paper";

// export default function Emergency() {
//     return (
//       <ScrollView>
//         <View style={styles.container}>
//             <Text style={styles.paragraph}>
//                 EMERGENCY CARD <Image source={require("../assets/p1.png")} />{" "}
//             </Text>
//             <Card style={{borderRadius:10,marginBottom:100}}>
//                 <Text style={styles.text}>
                    
//                     <Image source={require("../assets/p0.png")} />{" "}
//                     <Text style={styles.button}> Name: Sarina Malkova </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                    
//                     <Image source={require("../assets/p2.png")} />{" "}
//                     <Text style={styles.button}> Blood Type: AB1+ </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                    
//                     <Image source={require("../assets/p3.png")} />{" "}
//                     <Text style={styles.button}> Allergies: Dairy </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                   
//                     <Image source={require("../assets/p4.png")} />{" "}
//                     <Text style={styles.button}> Medications: Astaphanine </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                    
//                     <Image source={require("../assets/p5.png")} />{" "}
//                     <Text style={styles.button}> 3218 Winter St </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                   
//                     <Image source={require("../assets/p6.png")} />{" "}
//                     <Text style={styles.button}> Organ Donor: Yes </Text>{" "}
//                 </Text>
//                 <Text style={styles.text}>
                    
//                     <Image source={require("../assets/p7.png")} />{" "}
//                     <Text style={styles.button}> 267-547-2301 </Text>{" "}
//                 </Text>

               
//             </Card>
//         </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         paddingTop: Constants.statusBarHeight,
//         backgroundColor: "#F0574D", //BACKGROUND COLOR FOR ENTIRE SCREEN
//         padding: 8,
//         borderRadius:15,
//         // width: 200,
        
//     },
//     paragraph: {
//         margin: 24,
//         fontSize: 27, // HEADING "EMERGENCY CARD" SIZE
//         fontWeight: "800",
//         //   fontFamily:'Baloo',
//         textAlign: "center",
//         flexDirection: "row",
//         color: "white",
//     },
//     text: {
//         margin: 25,
//         fontSize: 20, // OTHER INFO FONT SIZE
//         textAlign: "left",
//         borderRadius: 25,

        
//     },
//     button: {

//         padding: 1,
//         borderRadius:15,
//         marginBottom:7,
//         justifyContent: "center",
//         alignItems: "center",
//         fontFamily:"monospace",
//       fontWeight:"bold",
//         fontSize: 15, // OTHER INFO FONT SIZE
//         textAlign: "left",
//     },
// });


import React from 'react'
import {View, Text,Image,TouchableOpacity } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'

const Emergency = () => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"90%"
            }}>
                <View style={{width:"10%",paddingLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../assets/p7.png')}
                            style={{marginVertical:40}}
                        />
                    </TouchableOpacity>   
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../assets/p7.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../assets/p7.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../assets/p7.png')}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../assets/p7.png')}
                            />
                        </View>  
                </View>
                <View style={{width:"90%"}}>
                        <SwiperComponent/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:28,
                                color:"#62636a"
                            }}>
                                Angelica
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:170,
                                fontSize:20
                            }}>
                                $400
                            </Text>
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:20
                        }}>
                            Russia
                        </Text>

                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:"#00a46c",
                                height:70,
                                marginTop:20,
                                borderTopRightRadius:25,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Buy Now</Text>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#62636a",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>Description</Text>
                            </View>
                        </View>
                        
        </View>
    )
}
export default Emergency;