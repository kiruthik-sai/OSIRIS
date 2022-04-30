import {
    View,
    Text,
    StyleSheet,
    Alert,
    TextInput,
    Button,
    ScrollView,
    Picker,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import React, { useEffect } from "react";
import Time from "../components/Time";
import useState from "react-usestateref";
import { database } from "../database/firebaseRealtime";
import { auth } from "../database/firebase";
import uuid from "react-native-uuid";

const Logs = (props) => {
    const [medicine, setMedicine] = useState("");
    const [numPills, setNumPills] = useState(0);
    const [when, setWhen] = useState("before");
    const [times, setTimes, timesRef] = useState([]);
    const [numTimes, setNumTimes] = useState(0);
    const [timeComponents, setTimeComponents, timeComponentsRef] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    const uid = auth.currentUser.uid;
    let index = 0;
    let id;

    useEffect(() => {
        let data = props.route.params;
        if (data) {
            id = data.id;
            setIsUpdate(true);
            console.log("isUpdate", isUpdate);
            console.log("id", id);
            setMedicine(data.medicine);
            setNumPills(data.numPills);
            setWhen(data.when);
            let tempt = [];
            for (let i = 0; i < data.times.length; i++) {
                let time = data.times[i];
                let temp = time.split(":");
                let hour = temp[0];
                let min = temp[1];
                tempt.push(
                    <Time
                        hours={hour}
                        min={min}
                        key={i}
                        identifier={i}
                        removeItem={removeItem}
                        updateTime={updateTime}
                    />
                );
            }
            setTimeComponents(tempt);
        }
    }, []);

    useEffect(() => {
        setNumTimes(timeComponents.length);
    }, [timeComponents]);

    const updateTime = (identifier, time) => {
        for (let i = 0; i < timeComponentsRef.current.length; i++) {
            if (timeComponentsRef.current[i].key == identifier) {
                setTimes([...times.slice(0, i), time, ...times.slice(i + 1)]);
            }
        }
    };

    const removeItem = (identifier) => {
        index = 0;
        for (let i = 0; i < timeComponentsRef.current.length; i++) {
            if (timeComponentsRef.current[i].key == identifier) {
                index = i;
                setTimes([
                    ...timesRef.current.slice(0, i),
                    ...timesRef.current.slice(i + 1),
                ]);
                break;
            }
        }

        let filtered = timeComponentsRef.current.filter((val) => {
            return val.key != identifier;
        });
        setTimeComponents(filtered);
    };

    const addTime = () => {
        if (numTimes == numPills) {
            Alert.alert("Cant add more times");
        } else {
            index++;
            setTimeComponents([
                ...timeComponents,
                <Time
                    key={numTimes}
                    identifier={numTimes}
                    removeItem={removeItem}
                    updateTime={updateTime}
                />,
            ]);
            setTimes([...times, ""]);
        }
    };

    const writeData = () => {
        let id = uuid.v4();
        let data = {
            medicine: medicine,
            numPills: numPills,
            when: when,
            times: times,
            id: id,
        };
        database
            .ref("Users")
            .child(uid)
            .child("logs")
            .child(id)
            .set(data)
            .then((data) => {
                Alert.alert("data added");
            });
    };

    const updateData = () => {
        let id = props.route.params.id;
        let data = {
            medicine: medicine,
            numPills: numPills,
            when: when,
            times: times,
            id: id,
        };
        database
            .ref("Users")
            .child(uid)
            .child("logs")
            .child(id)
            .update(data)
            .then((data) => {
                Alert.alert("data updated");
            });
    };
    return (
        <ScrollView style={{ backgroundColor: "#ece9f7" }}>
            <View style={styles.main}>
                <Text style={styles.header}>Logs</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setMedicine}
                    placeholder="Enter medicine name"
                    value={medicine}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumPills}
                    placeholder="Enter number of pills"
                    value={numPills}
                />
                <Picker
                    selectedValue={when}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setWhen(itemValue)}
                >
                    <Picker.Item label="Before Food" value="before" />
                    <Picker.Item label="During Food" value="during" />
                    <Picker.Item label="After Food" value="after" />
                </Picker>

                <TouchableOpacity style={styles.uprm} onPress={addTime}>
                    <Text style={styles.uprmText}>Add</Text>
                </TouchableOpacity>
                <ScrollView>{timeComponents}</ScrollView>

                <TouchableOpacity
                    style={styles.uprm}
                    onPress={() => {
                        if (isUpdate) {
                            updateData();
                        } else {
                            writeData();
                        }
                    }}
                >
                    <Text style={styles.uprmText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        marginBottom: 40,
        padding: "20%",
        alignItems: "center",
        // backgroundColor: "#ece9f7",
        // height: Dimensions.get("screen").height,
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
        fontFamily:"sans-serif-medium"
    },
    uprm: {
        padding: 10,
        margin: 5,
        backgroundColor: "#841584",
        borderRadius: 10,
    },
    uprmText: {
        fontSize: 13,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    input: {
        height: 50,
        width: 250,
        margin: 12,
        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
        fontFamily: "monospace",
    },
});

export default Logs;
