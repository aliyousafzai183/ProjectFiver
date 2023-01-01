import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, RefreshControl, Alert, LogBox } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//styles
import { verticalScale } from '../styles/Metrics'; 


// ignore unnecessay errors
LogBox.ignoreLogs(['new NativeEventEmitter']);
LogBox.ignoreAllLogs();

// db file
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

// Importing style
import styles from "../styles/mainPageStyle";
import styles1 from '../styles/planComponentStyle';

// importing component
import Plan from '../components/PlanComponent';

// bluetooth
import BluetoothStateManager from 'react-native-bluetooth-state-manager';
// import {PERMISSIONS} from 'react-native-permissions';

// background
import BackgroundService from 'react-native-background-actions';
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

// function
const MainScreen = ({ navigation }) => {
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [load, setload] = useState(false);

    try {
        async function fetchData() {
            const plansCol = collection(db, 'plans');
            const plansSnapshot = await getDocs(plansCol);
            const plansList = plansSnapshot.docs.map(
                (doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data };
                }
            );
            setData(plansList);
            setLoading(false);
            return plansList;
        }
    } catch (error) {
        Alert.alert(
            "Error While Fetching From Database",
            "In case of error contact support\nWhatsapp : +923473766183",
            [
                { text: "OK" }
            ]
        );
    }

    useEffect(() => {
        fetchData();
        startBackgroundService();
    }, [load])

    if (refresh) {
        fetchData();
    }

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefresh(true);
        wait(2000).then(() => setRefresh(false));
    }, []);


    const veryIntensiveTask = async (taskDataArguments) => {
        // Example of an infinite loop task
        const { delay } = taskDataArguments;
        await new Promise(async (resolve) => {
            for (; ;) {

                // work
                let Time = new Date();
                let currentDay = Time.getDay();
                let currentTime = Math.floor((Time.getTime() / 1000) / 60);

                try {
                    data?.map((async item => {
                        console.log("checking\n");
                        switch (currentDay) {
                            case 0:
                                console.log("checking sunday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable()
                                            .then((result) => {
                                                console.log(result);
                                            })
                                            .catch(err => console.log(err));

                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable()
                                            .then((result) => {
                                                console.log(result);
                                            })
                                            .catch(err => console.log(err));
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }
                                break;

                            case 1:
                                console.log("checking monday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;

                            case 2:
                                console.log("checking tuesday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;

                            case 3:
                                console.log("checking wednesday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;

                            case 4:
                                console.log("checking thursday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;

                            case 5:
                                console.log("checking friday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;

                            case 6:
                                console.log("checking saturday\n");
                                if (item.sunday) {
                                    let startPlan = Math.floor(item.start.seconds / 60);
                                    let endPlan = Math.floor(item.end.seconds / 60);
                                    if (startPlan == currentTime) {
                                        // enable bluetooth
                                        BluetoothStateManager.enable().then((result) => {
                                            console.log("Bluetooth Enabled.");
                                        });
                                    } else if (endPlan == currentTime) {
                                        // disable bluetooth
                                        BluetoothStateManager.disable().then((result) => {
                                            console.log("Bluetooth disabled");
                                        });
                                    } else {
                                        console.log("No plans to trigger that time");
                                    }
                                } else {
                                    console.log("No plans to run today");
                                }

                                break;
                        }
                    }));
                    await BackgroundService.updateNotification({
                        taskDesc: 'Bluetooth Planner is running to auto turn on and off bluetooth'
                    });
                    await sleep(delay);
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    const options = {
        taskName: 'Bluetooth Planner',
        taskTitle: 'Bluetooth Planner is running in background',
        taskDesc: 'Bluetooth Planner is running in the background to check whether the plan time is near or not!',
        taskIcon: {
            name: 'ic_launcher',
            type: 'mipmap',
        },
        color: '#ff00ff',
        linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
        parameters: {
            delay: 15000,
        },
    };

    // background
    const startBackgroundService = async () => {
        console.log("Background service started");
        await BackgroundService.start(veryIntensiveTask, options);
        await BackgroundService.updateNotification({ taskDesc: 'Bluetooth Planner is running' });
    }

    // to stop background services
    // const stopBackgroundService = async () => {
    //     await BackgroundService.stop();
    // }


    if (loading) {
        return (
            <ImageBackground
                source={require('../icons/splash.png')}
                style={{ width: '100%', height: '100%' }}
            >
            </ImageBackground>
        )
    } else {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.wrapper1}>
                    <Text style={styles.heading1}>Bluetooth</Text>
                    <Text style={styles.heading1}>Planner</Text>
                </View>

                <View style={styles.wrapper2}>
                    <View style={styles1.mainWrapper} >

                        <View>
                            <Text style={styles1.list}>#</Text>
                        </View>
                        <View>
                            <Text style={styles1.list}>Start-Time</Text>
                        </View>
                        <View>
                            <Text style={styles1.list}>End-Time</Text>
                        </View>

                        <View>
                            <Text style={styles1.list}>Del</Text>
                        </View>

                    </View>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={refresh}
                                onRefresh={onRefresh}
                            />
                        }
                        style={{
                            paddingTop: 3,
                            paddingLeft: 2,
                            paddingRight: 10
                        }}>
                        {
                            data?.map(function (item, index) {
                                return (
                                    <Plan data={item} key={item.id} setload={setload} index={index+1}/>
                                )
                            })
                        }
                    </ScrollView>

                </View>

                <View style={styles.wrapper3}>
                    <TouchableOpacity style={{
                        height: verticalScale(110),
                        backgroundColor: '#436AC8',
                        borderWidth: 1,
                        borderColor: '#295740',
                    }}
                        onPress={() => navigation.navigate('planPage')}
                    ><Text style={styles.button}>+</Text></TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }



}

export default MainScreen;