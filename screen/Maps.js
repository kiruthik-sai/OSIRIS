// import { View, Text } from 'react-native'
// import React from 'react'
// import { ImageBackground } from 'react-native-web'

// const Logs = () => {
//   return (
//     <View>
//       <Text>Logs</Text>
//     </View>
//   )
// }

// export default Logs

import React, { Component, useEffect } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
} from "react-native";
import GetLocation from "react-native-get-location";
import * as Location from "expo-location";
// You can import from local files

export default class MapsAlert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialRegion: {
                latitude: 39.952583,
                longitude: -75.165222,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.042,
            },

            markers: [
                {
                    title: "Upper Darby Family Pharmacy",
                    description: "6756 Market St, Upper Darby",
                    coordinates: {
                        latitude: 39.9620595,
                        longitude: -75.25557669999999,
                    },
                },
                {
                    title: "Public Drug Prescriptions",
                    description: "6925 Ludlow St, Upper Darby",
                    coordinates: {
                        latitude: 39.9614496,
                        longitude: -75.2601884,
                    },
                },
                {
                    title: "Hope Pharmacy",
                    description: "7050 Terminal Square # 208, Upper Darby",
                    coordinates: {
                        latitude: 39.9612988,
                        longitude: -75.2628101,
                    },
                },
                {
                    title: "Upper Darby Pharmacy",
                    description: "119 Long Ln, Upper Darby",
                    coordinates: {
                        latitude: 39.9589055,
                        longitude: -75.2628706,
                    },
                },
                {
                    title: "Garrett Pharmacy",
                    description: "140 Garrett Rd, Upper Darby",
                    coordinates: {
                        latitude: 39.9597969,
                        longitude: -75.26389089999999,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "123 S 69th St, Upper Darby",
                    coordinates: {
                        latitude: 39.9580762,
                        longitude: -75.2576265,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "6562 Haverford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9718309,
                        longitude: -75.25125419999999,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "136 N 63rd St, Philadelphia",
                    coordinates: {
                        latitude: 39.965767,
                        longitude: -75.2465972,
                    },
                },
                {
                    title: "Walgreens Pharmacy",
                    description: "300 N 63rd St, Philadelphia",
                    coordinates: {
                        latitude: 39.96767759999999,
                        longitude: -75.2463969,
                    },
                },
                {
                    title: "Wellaid Pharmacy",
                    description: "21 Cobbs Creek Pkwy, Philadelphia",
                    coordinates: { latitude: 39.961676, longitude: -75.246506 },
                },
                {
                    title: "Four Star Pharmacy",
                    description: "6542 Lebanon Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9770343,
                        longitude: -75.2516313,
                    },
                },
                {
                    title: "Community Rx Pharmacy",
                    description: "800 Garrett Rd, Upper Darby",
                    coordinates: {
                        latitude: 39.9573174,
                        longitude: -75.26890949999999,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "5627-99 Chestnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9601025,
                        longitude: -75.2346809,
                    },
                },
                {
                    title: "HAVERFORD PHARMACY",
                    description: "5601 Vine St, Philadelphia",
                    coordinates: {
                        latitude: 39.9666687,
                        longitude: -75.23256649999999,
                    },
                },
                {
                    title: "Lansdowne Community Pharmacy",
                    description: "5936 Lansdowne Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9758805,
                        longitude: -75.23988899999999,
                    },
                },
                {
                    title: "Gold's Pharmacy",
                    description: "7543 Haverford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9794939,
                        longitude: -75.2683985,
                    },
                },
                {
                    title: "LONG LANE DISCOUNT PHARMACY",
                    description: "434 Long Ln, Upper Darby",
                    coordinates: {
                        latitude: 39.949658,
                        longitude: -75.2617283,
                    },
                },
                {
                    title: "Pepper Pharmacy",
                    description: "195-197 E Plumstead Ave, Lansdowne",
                    coordinates: {
                        latitude: 39.9506567,
                        longitude: -75.2686532,
                    },
                },
                {
                    title: "Neighborhood Pharmacy - Compounding Pharmacy",
                    description: "5701 Chestnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9598613,
                        longitude: -75.2353624,
                    },
                },
                {
                    title: "Sunny Pharmacy",
                    description: "918 E Baltimore Ave, Lansdowne",
                    coordinates: {
                        latitude: 39.940626,
                        longitude: -75.2574348,
                    },
                },
                {
                    title: "Drexel University Main Building",
                    description: "3141 Chestnut Street",
                    coordinates: { latitude: 39.954, longitude: -75.18686 },
                },
                {
                    title: "Lancaster Pharmacy",
                    description: "4127 Lancaster Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.96588759999999,
                        longitude: -75.20636879999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2320 Fairmount Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9669475,
                        longitude: -75.176335,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "1826 Chestnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9515475,
                        longitude: -75.17172959999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2132 South St, Philadelphia",
                    coordinates: {
                        latitude: 39.9450451,
                        longitude: -75.17847809999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "3925 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9542356,
                        longitude: -75.2011919,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "4314 Locust St, Philadelphia",
                    coordinates: {
                        latitude: 39.953523,
                        longitude: -75.20971089999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "3401 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9529913,
                        longitude: -75.1922872,
                    },
                },
                {
                    title: "Aspire Pharmacy",
                    description: "4307 Locust St, Philadelphia",
                    coordinates: {
                        latitude: 39.9539204,
                        longitude: -75.20966059999999,
                    },
                },
                {
                    title: "My Pharmacy",
                    description: "20 N 40th St, Philadelphia",
                    coordinates: {
                        latitude: 39.958049,
                        longitude: -75.20214299999999,
                    },
                },
                {
                    title: "Fairmount Pharmacy",
                    description: "1900 Green St, Philadelphia",
                    coordinates: {
                        latitude: 39.9647154,
                        longitude: -75.16924019999999,
                    },
                },
                {
                    title: "The New Pharmacy",
                    description: "4835 Woodland Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9412242,
                        longitude: -75.21259979999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2001 Pennsylvania Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9616047,
                        longitude: -75.1726872,
                    },
                },
                {
                    title: "Walgreens Pharmacy",
                    description: "1617 John F Kennedy Blvd, Philadelphia",
                    coordinates: { latitude: 39.9541597, longitude: -75.16793 },
                },
                {
                    title: "CVS Pharmacy",
                    description: "1919 Market St, Philadelphia",
                    coordinates: {
                        latitude: 39.9539164,
                        longitude: -75.17269089999999,
                    },
                },
                {
                    title: "Bell Apothecary Inc",
                    description: "4014 Lancaster Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9633522,
                        longitude: -75.2030636,
                    },
                },
                {
                    title: "Medical Tower Pharmacy",
                    description: "255 S 17th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9481252,
                        longitude: -75.1692972,
                    },
                },
                {
                    title: "Pennmark Pharmacy",
                    description: "1735 South St, Philadelphia",
                    coordinates: {
                        latitude: 39.9444978,
                        longitude: -75.1714693,
                    },
                },
                {
                    title: "18th Street Apothecary",
                    description: "113 S 18th St, Philadelphia",
                    coordinates: { latitude: 39.951281, longitude: -75.170337 },
                },
                {
                    title: "CVS Pharmacy",
                    description: "1500 Spruce St, Philadelphia",
                    coordinates: {
                        latitude: 39.9469991,
                        longitude: -75.1669027,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "1628-36 Chestnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9512521,
                        longitude: -75.1686335,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "3925 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9542356,
                        longitude: -75.2011919,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "3401 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9529913,
                        longitude: -75.1922872,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "2301 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9514977,
                        longitude: -75.1785304,
                    },
                },
                {
                    title: "Penn Presbyterian Medical Center Outpatient Pharmacy",
                    description: "51 N 39th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9584406,
                        longitude: -75.1994594,
                    },
                },
                {
                    title: "Millennium Pharmacy Systems",
                    description: "3609 Chestnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9549064,
                        longitude: -75.1950454,
                    },
                },
                {
                    title: "Perelman Center for Advanced Medicine Outpatient Pharmacy",
                    description:
                        "West Pavilion, 3400 Civic Center Blvd 1st Floor, Philadelphia",
                    coordinates: { latitude: 39.9476, longitude: -75.19255 },
                },
                {
                    title: "Hospital of the University of Pennsylvania Outpatient Pharmacy",
                    description: "3400 Spruce St Ravdin 1, Philadelphia",
                    coordinates: {
                        latitude: 39.9501071,
                        longitude: -75.1937573,
                    },
                },
                {
                    title: "Penn Medicine University City Outpatient Pharmacy",
                    description: "3737 Market St Ground Floor, Philadelphia",
                    coordinates: {
                        latitude: 39.9570031,
                        longitude: -75.19714580000002,
                    },
                },
                {
                    title: "My Pharmacy",
                    description: "20 N 40th St, Philadelphia",
                    coordinates: {
                        latitude: 39.958049,
                        longitude: -75.20214299999999,
                    },
                },
                {
                    title: "Steven M. Sheerin, RPH",
                    description: "Philadelphia",
                    coordinates: {
                        latitude: 39.9590658,
                        longitude: -75.2002261,
                    },
                },
                {
                    title: "Natalie Glodack, RPH",
                    description: "Philadelphia",
                    coordinates: {
                        latitude: 39.9590658,
                        longitude: -75.2002261,
                    },
                },
                {
                    title: "Bell Apothecary Inc",
                    description: "4014 Lancaster Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9633522,
                        longitude: -75.2030636,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2320 Fairmount Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9669475,
                        longitude: -75.176335,
                    },
                },
                {
                    title: "Campus Pharmacy",
                    description: "4027 Market St, Philadelphia",
                    coordinates: {
                        latitude: 39.9574386,
                        longitude: -75.20306839999999,
                    },
                },
                {
                    title: "CVS",
                    description: "3401 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9529913,
                        longitude: -75.1922872,
                    },
                },
                {
                    title: "Rite Aid",
                    description: "2301 Walnut St, Philadelphia",
                    coordinates: { latitude: 39.951624, longitude: -75.178663 },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "4055-89 Market St, Philadelphia",
                    coordinates: {
                        latitude: 39.9578756,
                        longitude: -75.204275,
                    },
                },
                {
                    title: "CVS",
                    description: "3925 Walnut St, Philadelphia",
                    coordinates: {
                        latitude: 39.9541723,
                        longitude: -75.2019488,
                    },
                },
                {
                    title: "Daniel B. Gerson, CGP",
                    description: "3461 Civic Center Blvd, Philadelphia",
                    coordinates: {
                        latitude: 39.9480987,
                        longitude: -75.19373039999999,
                    },
                },
                {
                    title: "Joe's Pharmacy",
                    description:
                        "Parkway Pharmacy, 2401 Pennsylvania Ave #1d7, Philadelphia",
                    coordinates: {
                        latitude: 39.96700209999999,
                        longitude: -75.17765729999999,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "1717 N 12th St Unit F, Philadelphia",
                    coordinates: {
                        latitude: 39.97858069999999,
                        longitude: -75.1534052,
                    },
                },
                {
                    title: "Girard Ave Pharmacy",
                    description: "1348 W Girard Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9711968,
                        longitude: -75.1588019,
                    },
                },
                {
                    title: "Get Well Pharmacy",
                    description: "708 W Girard Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9702692,
                        longitude: -75.1485455,
                    },
                },
                {
                    title: "Cambria Pharmacies Inc",
                    description: "2860 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9951244,
                        longitude: -75.1397851,
                    },
                },
                {
                    title: "West Girard Health Pharmacy",
                    description: "1207 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.970481,
                        longitude: -75.1448503,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2640 E Cumberland St, Philadelphia",
                    coordinates: {
                        latitude: 39.97645259999999,
                        longitude: -75.12024840000001,
                    },
                },
                {
                    title: "Frankford Avenue Pharmacy",
                    description: "4531 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 40.0145217,
                        longitude: -75.0854506,
                    },
                },
                {
                    title: "Cambria Pharmacy",
                    description: "3169 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9992724,
                        longitude: -75.13851369999999,
                    },
                },
                {
                    title: "Lehigh Pharmacy",
                    description: "1006 W Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.99303039999999,
                        longitude: -75.14837109999999,
                    },
                },
                {
                    title: "Cure Discount Pharmacy",
                    description: "2310 N Broad St space a, Philadelphia",
                    coordinates: {
                        latitude: 39.98818259999999,
                        longitude: -75.1560203,
                    },
                },
                {
                    title: "Philly Drugstore",
                    description: "2729 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.992907,
                        longitude: -75.1396479,
                    },
                },
                {
                    title: "Friendly Pharmacy",
                    description: "2258 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 39.9847071,
                        longitude: -75.1324417,
                    },
                },
                {
                    title: "MD Pharmacy",
                    description: "1641 N Franklin St, Philadelphia",
                    coordinates: {
                        latitude: 39.9772041,
                        longitude: -75.1472484,
                    },
                },
                {
                    title: "RiteChoice Pharmacy at 11th Street",
                    description: "850 N 11th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9679783,
                        longitude: -75.154968,
                    },
                },
                {
                    title: "Walgreens Pharmacy",
                    description: "4201 N Broad St, Philadelphia",
                    coordinates: {
                        latitude: 40.01727530000001,
                        longitude: -75.1487035,
                    },
                },
                {
                    title: "Philadelphia Pharmacy",
                    description: "101 E Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9910418,
                        longitude: -75.1307104,
                    },
                },
                {
                    title: "Cambria Pharmacy",
                    description: "2900 Germantown Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9962475,
                        longitude: -75.147202,
                    },
                },
                {
                    title: "Center Pharmacy",
                    description: "516 W Erie Ave, Philadelphia",
                    coordinates: {
                        latitude: 40.0073077,
                        longitude: -75.13757509999999,
                    },
                },
                {
                    title: "Fishtown Pharmacy - Compounding Pharmacy",
                    description: "1802 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9770007,
                        longitude: -75.13192459999999,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "2131-59 N Broad St, Philadelphia",
                    coordinates: { latitude: 39.98588, longitude: -75.1556466 },
                },
                {
                    title: "Oxford Pharmacy",
                    description: "3254 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 39.9998299,
                        longitude: -75.1291976,
                    },
                },
                {
                    title: "HKS Pharmacy",
                    description: "3357 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 40.0013959,
                        longitude: -75.1285571,
                    },
                },
                {
                    title: "Allegheny Apothecary",
                    description: "2244 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9898902,
                        longitude: -75.1079587,
                    },
                },
                {
                    title: "BUENA SALUD PHARMACY",
                    description: "3119 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.99191709999999,
                        longitude: -75.112049,
                    },
                },
                {
                    title: "Port Richmond Pharmacy",
                    description: "2512 E Clearfield St, Philadelphia",
                    coordinates: { latitude: 39.985321, longitude: -75.107446 },
                },
                {
                    title: "AV Pharmacy",
                    description: "3237 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9969346,
                        longitude: -75.11214249999999,
                    },
                },
                {
                    title: "Nice Pharmacy Inc",
                    description: "110 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9983424,
                        longitude: -75.1288438,
                    },
                },
                {
                    title: "Walgreens Pharmacy",
                    description: "1809 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9967356,
                        longitude: -75.113091,
                    },
                },
                {
                    title: "East Lehigh Health Pharmacy",
                    description: "163 E Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.99083479999999,
                        longitude: -75.1290448,
                    },
                },
                {
                    title: "A & F Pharmacy",
                    description: "3200 Frankford Ave, Philadelphia",
                    coordinates: { latitude: 39.993244, longitude: -75.11022 },
                },
                {
                    title: "Caring Pharmacy",
                    description: "2541 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9882636,
                        longitude: -75.1281679,
                    },
                },
                {
                    title: "Walgreens Pharmacy",
                    description: "1809 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9964151,
                        longitude: -75.11262289999999,
                    },
                },
                {
                    title: "QRx3 Pharmacy",
                    description: "962 E Tioga St, Philadelphia",
                    coordinates: {
                        latitude: 40.0007207,
                        longitude: -75.1105355,
                    },
                },
                {
                    title: "Nexcare Pharmacy 2 Inc.",
                    description: "3227 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9968177,
                        longitude: -75.1123641,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "338 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9972374,
                        longitude: -75.12365799999999,
                    },
                },
                {
                    title: "THE MEDICINE SHOPPE",
                    description: "3025-27 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.99404759999999,
                        longitude: -75.1174391,
                    },
                },
                {
                    title: "Sunray Drugs - C Street",
                    description: "424 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9974094,
                        longitude: -75.1223739,
                    },
                },
                {
                    title: "Sunray Drugs - K&A",
                    description: "825 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9968489,
                        longitude: -75.1146801,
                    },
                },
                {
                    title: "Philadelphia Pharmacy",
                    description: "101 E Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9910418,
                        longitude: -75.1307104,
                    },
                },
                {
                    title: "Friendly Pharmacy",
                    description: "2258 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 39.9847071,
                        longitude: -75.1324417,
                    },
                },
                {
                    title: "Cambria Pharmacies Inc",
                    description: "2860 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9951244,
                        longitude: -75.1397851,
                    },
                },
                {
                    title: "CVS Pharmacy",
                    description: "2640 E Cumberland St, Philadelphia",
                    coordinates: {
                        latitude: 39.97645259999999,
                        longitude: -75.12024840000001,
                    },
                },
                {
                    title: "Cambria Pharmacy",
                    description: "3169 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9992724,
                        longitude: -75.13851369999999,
                    },
                },
                {
                    title: "Philly Drugstore",
                    description: "2729 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 39.992907,
                        longitude: -75.1396479,
                    },
                },
                {
                    title: "Friendly Pharmacy",
                    description: "2258 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 39.9847071,
                        longitude: -75.1324417,
                    },
                },
                {
                    title: "Philadelphia Pharmacy",
                    description: "101 E Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9910418,
                        longitude: -75.1307104,
                    },
                },
                {
                    title: "Center Pharmacy",
                    description: "516 W Erie Ave, Philadelphia",
                    coordinates: {
                        latitude: 40.0073077,
                        longitude: -75.13757509999999,
                    },
                },
                {
                    title: "Fishtown Pharmacy - Compounding Pharmacy",
                    description: "1802 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9770007,
                        longitude: -75.13192459999999,
                    },
                },
                {
                    title: "North Philly Pharmacy",
                    description: "118 Diamond St, Philadelphia",
                    coordinates: {
                        latitude: 39.9816188,
                        longitude: -75.1337791,
                    },
                },
                {
                    title: "Allegheny Plaza Pharmacy",
                    description: "400 W Allegheny Ave Suite B-2, Philadelphia",
                    coordinates: {
                        latitude: 39.99916839999999,
                        longitude: -75.1363075,
                    },
                },
                {
                    title: "Rite Aid Pharmacy",
                    description: "260 W Lehigh Ave #80, Philadelphia",
                    coordinates: { latitude: 39.991307, longitude: -75.137154 },
                },
                {
                    title: "Oxford Pharmacy",
                    description: "3254 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 39.9998299,
                        longitude: -75.1291976,
                    },
                },
                {
                    title: "Caribbean Pharmacy",
                    description: "3825 N 5th St, Philadelphia",
                    coordinates: {
                        latitude: 40.0096595,
                        longitude: -75.1362042,
                    },
                },
                {
                    title: "HKS Pharmacy",
                    description: "3357 N Front St, Philadelphia",
                    coordinates: {
                        latitude: 40.0013959,
                        longitude: -75.1285571,
                    },
                },
                {
                    title: "Allegheny Apothecary",
                    description: "2244 E Allegheny Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9898902,
                        longitude: -75.1079587,
                    },
                },
                {
                    title: "Aramingo Pharmacy",
                    description: "2313 E Venango St #1A, Philadelphia",
                    coordinates: {
                        latitude: 39.9941386,
                        longitude: -75.09749699999999,
                    },
                },
                {
                    title: "BUENA SALUD PHARMACY",
                    description: "3119 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.99191709999999,
                        longitude: -75.112049,
                    },
                },
                {
                    title: "Port Richmond Pharmacy",
                    description: "2512 E Clearfield St, Philadelphia",
                    coordinates: { latitude: 39.985321, longitude: -75.107446 },
                },
                {
                    title: "USA Pharmacy",
                    description: "3216 N 6th St, Philadelphia",
                    coordinates: {
                        latitude: 40.00053200000001,
                        longitude: -75.1405544,
                    },
                },
                {
                    title: "AV Pharmacy",
                    description: "3237 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9969346,
                        longitude: -75.11214249999999,
                    },
                },
            ],

            resources: [
                {
                    title: "Crossroads",
                    description: "2317 E Westmoreland St, Philadelphia",
                    coordinates: {
                        latitude: 39.990581,
                        longitude: -75.1044443,
                    },
                },
                {
                    title: "Addiction Treatment Center",
                    description: "2842 Frankford Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9896728,
                        longitude: -75.1188091,
                    },
                },
                {
                    title: "CleanSlate Outpatient Addiction Medicine",
                    description: "3380 Memphis St, Philadelphia",
                    coordinates: {
                        latitude: 39.991341,
                        longitude: -75.10252299999999,
                    },
                },
                {
                    title: "A & O Recovery Services",
                    description: "3319 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9980207,
                        longitude: -75.1101898,
                    },
                },
                {
                    title: "Act II by JEVS",
                    description: "1745 N 4th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9776235,
                        longitude: -75.141373,
                    },
                },
                {
                    title: "COMHAR",
                    description: "100 W Lehigh Ave, Philadelphia",
                    coordinates: { latitude: 39.99057, longitude: -75.1312866 },
                },
                {
                    title: "FIRST STOP RECOVERY",
                    description: "2414 Kensington Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9868392,
                        longitude: -75.1312561,
                    },
                },
                {
                    title: "Upenn Treatment Research Center",
                    description: "3535 Market St #500, Philadelphia",
                    coordinates: {
                        latitude: 39.9564311,
                        longitude: -75.193916,
                    },
                },
                {
                    title: "Penn Addiction Treatment Services",
                    description: "4040 Market St Suite 200 & 220, Philadelphia",
                    coordinates: {
                        latitude: 39.9569563,
                        longitude: -75.20332619999999,
                    },
                },
                {
                    title: "Penn's Charles O'Brien Center for Addiction Treatment",
                    description: "3900 Chestnut St, Philadelphia",
                    coordinates: { latitude: 39.954973, longitude: -75.200315 },
                },
                {
                    title: "Livengrin Foundation",
                    description:
                        "Main Campus, 1500 Walnut St #1051, Philadelphia",
                    coordinates: { latitude: 39.948925, longitude: -75.166315 },
                },
                {
                    title: "Crossroads",
                    description: "2820 W Girard Ave, Philadelphia",
                    coordinates: { latitude: 39.974202, longitude: -75.182676 },
                },
                {
                    title: "Rehab After Work",
                    description: "1420 Walnut St #500, Philadelphia",
                    coordinates: {
                        latitude: 39.9491747,
                        longitude: -75.16546079999999,
                    },
                },
                {
                    title: "Jefferson Methadone Clinic",
                    description: "1021 S 21st St #1, Philadelphia",
                    coordinates: {
                        latitude: 39.9395187,
                        longitude: -75.17805059999999,
                    },
                },
                {
                    title: "Proline Opioid Rehab Philadelphia, PA",
                    description: "739 N 24th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9685438,
                        longitude: -75.17666609999999,
                    },
                },
                {
                    title: "The Consortium - Addictions Treatment Programs",
                    description: "451 S University Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9482535,
                        longitude: -75.1980873,
                    },
                },
                {
                    title: "Resources For Human Development",
                    description: "5037 Woodland Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9394266,
                        longitude: -75.2151772,
                    },
                },
                {
                    title: "Sobriety Now",
                    description: "100 S Broad St Suite 2230, Philadelphia",
                    coordinates: {
                        latitude: 39.9503251,
                        longitude: -75.1644738,
                    },
                },
                {
                    title: "Resources For Human Development Inc",
                    description: "3212 Baring St, Philadelphia",
                    coordinates: {
                        latitude: 39.961436,
                        longitude: -75.18885499999999,
                    },
                },
                {
                    title: "Philadelphia Behavioral Health LLC",
                    description: "264 S 20th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9485477,
                        longitude: -75.1744677,
                    },
                },
                {
                    title: "Upenn Treatment Research Center",
                    description: "3535 Market St #500, Philadelphia",
                    coordinates: {
                        latitude: 39.9564311,
                        longitude: -75.193916,
                    },
                },
                {
                    title: "Stop & Start Treatment Programs",
                    description: "2528 W Lehigh Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9961261,
                        longitude: -75.173311,
                    },
                },
                {
                    title: "Rehab After Work",
                    description: "1420 Walnut St #500, Philadelphia",
                    coordinates: {
                        latitude: 39.9491747,
                        longitude: -75.16546079999999,
                    },
                },
                {
                    title: "Penn Addiction Treatment Services",
                    description: "4040 Market St Suite 200 & 220, Philadelphia",
                    coordinates: {
                        latitude: 39.9569563,
                        longitude: -75.20332619999999,
                    },
                },
                {
                    title: "Livengrin Foundation",
                    description:
                        "Main Campus, 1500 Walnut St #1051, Philadelphia",
                    coordinates: { latitude: 39.948925, longitude: -75.166315 },
                },
                {
                    title: "Gaudenzia Together House Womens Unit",
                    description:
                        "1306 Spring Garden St 4th Floor, Philadelphia",
                    coordinates: {
                        latitude: 39.9618338,
                        longitude: -75.1596912,
                    },
                },
                {
                    title: "Directions Behavioral Health Centers",
                    description: "2300 S Broad St, Philadelphia",
                    coordinates: {
                        latitude: 39.9218264,
                        longitude: -75.17081519999999,
                    },
                },
                {
                    title: "New Start Rehabilitation Center",
                    description: "5035 Walton Ave floor 2, Philadelphia",
                    coordinates: {
                        latitude: 39.94955789999999,
                        longitude: -75.22432739999999,
                    },
                },
                {
                    title: "Resources For Human Development",
                    description: "5037 Woodland Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9394266,
                        longitude: -75.2151772,
                    },
                },
                {
                    title: "Southwest Nu Stop",
                    description: "1609 Poplar St, Philadelphia",
                    coordinates: {
                        latitude: 39.9708657,
                        longitude: -75.1634143,
                    },
                },
                {
                    title: "CleanSlate Outpatient Addiction Medicine",
                    description: "2300 S Broad St Suite 205, Philadelphia",
                    coordinates: {
                        latitude: 39.9218264,
                        longitude: -75.1708153,
                    },
                },
                {
                    title: "Sobriety Now",
                    description: "100 S Broad St Suite 2230, Philadelphia",
                    coordinates: {
                        latitude: 39.9503251,
                        longitude: -75.1644738,
                    },
                },
                {
                    title: "Philadelphia Recovery Residences",
                    description: "1338 W Shunk St, Philadelphia",
                    coordinates: {
                        latitude: 39.917893,
                        longitude: -75.1704427,
                    },
                },
                {
                    title: "Jefferson Methadone Clinic",
                    description: "1021 S 21st St #1, Philadelphia",
                    coordinates: {
                        latitude: 39.9395187,
                        longitude: -75.17805059999999,
                    },
                },
                {
                    title: "Pennsylvania Recovery Center - Philadelphia",
                    description: "1206 E Palmer St, Philadelphia",
                    coordinates: {
                        latitude: 39.9711922,
                        longitude: -75.1287064,
                    },
                },
                {
                    title: "Proline Opioid Rehab Philadelphia, PA",
                    description: "739 N 24th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9685438,
                        longitude: -75.17666609999999,
                    },
                },
                {
                    title: "The Consortium - Addictions Treatment Programs",
                    description: "451 S University Ave, Philadelphia",
                    coordinates: {
                        latitude: 39.9482535,
                        longitude: -75.1980873,
                    },
                },
                {
                    title: "Addiction Medicine And Health",
                    description: "928 Market St, Philadelphia",
                    coordinates: {
                        latitude: 39.9510195,
                        longitude: -75.1561947,
                    },
                },
                {
                    title: "Act II by JEVS",
                    description: "1745 N 4th St, Philadelphia",
                    coordinates: {
                        latitude: 39.9776235,
                        longitude: -75.141373,
                    },
                },
                {
                    title: "Behavioral Health Special",
                    description: "801 Market St #7200, Philadelphia",
                    coordinates: {
                        latitude: 39.9516669,
                        longitude: -75.1537371,
                    },
                },
            ],
        };
    }

    componentDidMount = () => {
        this.handleUserLocation();
    };

    handleUserLocation = () => {
        Location.installWebGeolocationPolyfill();

        navigator.geolocation.getCurrentPosition((pos) => {
            this.map.animateToRegion({
                ...this.state.initialRegion,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
                latitudeDelta: 0.008,
                longitudeDelta: 0.008,
            });
            this.setState({
                ...this.state.initialRegion,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,
            });
        });
    };
    render() {
        const { height: windowHeight } = Dimensions.get("window");
        const varTop = windowHeight - 150;
        const hitSlop = {
            top: 15,
            bottom: 15,
            left: 15,
            right: 15,
        };
        bbStyle = function (vheight) {
            return {
                position: "absolute",
                top: vheight,
                left: 320,
                right: 0,
                backgroundColor: "transparent",
                alignItems: "center",
            };
        };
        return (
            <View style={styles.container}>
                <View style={bbStyle(varTop)}>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        activeOpacity={0.7}
                        style={styles.mapButton}
                        onPress={() => this.handleUserLocation()}
                    >
                        <Image source={require("../assets/7.png")} />
                    </TouchableOpacity>
                </View>
                <MapView
                    style={styles.map}
                    initialRegion={this.state.initialRegion}
                    ref={(ref) => (this.map = ref)}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    loadingEnabled={true}
                    //userInterfaceStyle = {'dark'}
                    mapType={"mutedStandard"}
                >
                    {this.state.markers.map((marker) => (
                        <Marker
                            pinColor={"red"}
                            coordinate={marker.coordinates}
                            //  title={marker.title}
                            //description={marker.description}
                        >
                            <Callout>
                                <Text
                                    style={{ fontWeight: "800", fontSize: 28 }}
                                >
                                    {" "}
                                    <Image
                                        source={require("../assets/med_s.jpg")}
                                    />{" "}
                                    NARCAN{" "}
                                </Text>
                                <Text
                                    style={{ fontWeight: "bold", fontSize: 15 }}
                                >
                                    {" "}
                                    {marker.title}{" "}
                                </Text>
                                <Text> {marker.description} </Text>
                            </Callout>
                        </Marker>
                    ))}

                    {this.state.resources.map((marker) => (
                        <Marker
                            pinColor={"navy"}
                            coordinate={marker.coordinates}
                            //   title={marker.title}
                            //   description={marker.description}
                        >
                            <Callout>
                                <Text
                                    style={{ fontWeight: "800", fontSize: 27 }}
                                >
                                    {" "}
                                    <Image
                                        source={require("../assets/res_s.png")}
                                    />{" "}
                                    RESOURCE CENTER{" "}
                                </Text>
                                <Text
                                    style={{ fontWeight: "bold", fontSize: 15 }}
                                >
                                    {" "}
                                    {marker.title}{" "}
                                </Text>
                                <Text> {marker.description} </Text>
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 150,

        zIndex: -1,
        flex: 1,
    },
    mapButton: {
        width: 45,
        height: 45,
        borderRadius: 85 / 2,
        backgroundColor: "rgba(175,215,234, 1)",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowRadius: 8,
        shadowOpacity: 0.12,
        opacity: 0.9,
        zIndex: 10,
    },
});
