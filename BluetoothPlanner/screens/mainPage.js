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
import { async } from '@firebase/util';
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

// function
const MainScreen = ({ navigation }) => {
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [load, setload] = useState(false);

    fetchData = async () => {
        try {
            const plansCol = collection(db, 'plans');
            const plansSnapshot = await getDocs(plansCol);
            const plansList = plansSnapshot.docs.map(
                (doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data };
                }
            );
            setData(plansList);
            if (data.length == 0) {
                console.log("No data found");
                // to stop background services
                await BackgroundService.stop();
            } else {
                await BackgroundService.stop();
                console.log("data found");
                await BackgroundService.start(veryIntensiveTask, options);
                await BackgroundService.updateNotification({ taskDesc: 'Bluetooth Planner is running' });
            }
            setLoading(false);
            return plansList;

        } catch (error) {
            Alert.alert(
                "No Internet!",
                "Try connecting to the internet first!",
                [
                  { text: "OK" }
                ]
              );
        }
    }

    useEffect(() => {
        fetchData();
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
        console.log("Background service started");
        // Example of an infinite loop task
        const { delay } = taskDataArguments;
        await new Promise(async (resolve) => {
            for (; ;) {
                fetchData = async () => {
                    try {
                        const plansCol = collection(db, 'plans');
                        const plansSnapshot = await getDocs(plansCol);
                        const plansList = plansSnapshot.docs.map(
                            (doc) => {
                                const data = doc.data()
                                return { id: doc.id, ...data };
                            }
                        );
                        setData(plansList);
                        return plansList;

                    } catch (error) {
                        Alert.alert(
                            "No Internet!",
                            "Try connecting to the internet first!",
                            [
                              { text: "OK" }
                            ]
                          );
                    }
                }
                fetchData();
                // work
                let Time = new Date();
                let currentDay = Time.getDay();
                let currentTime = Math.floor((Time.getTime() / 1000) / 60);
                console.log(data);

                if (data.length == 0) {
                    console.log("No data found");
                } else {
                    try {
                        data?.map((async item => {
                            console.log("checking\n");
                            switch (currentDay) {
                                case 0:
                                    console.log("checking sunday\n");
                                    if (item.sunday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
                                    break;
    
                                case 1:
                                    console.log("checking monday\n");
                                    if (item.monday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
    
                                case 2:
                                    console.log("checking tuesday\n");
                                    if (item.tuesday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
    
                                case 3:
                                    console.log("checking wednesday\n");
                                    if (item.wednesday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
    
                                case 4:
                                    console.log("checking thursday\n");
                                    if (item.thursday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
    
                                case 5:
                                    console.log("checking friday\n");
                                    if (item.friday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
    
                                case 6:
                                    console.log("checking saturday\n");
                                    if (item.saturday) {
                                        let startPlan = Math.floor(item.start.seconds / 60);
                                        let endPlan = Math.floor(item.end.seconds / 60);
                                        if (currentTime >= startPlan && currentTime < endPlan) {
                                            // enable bluetooth
                                            BluetoothStateManager.enable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error enabling bluetooth while app is killed\n"+err));
    
                                        } else if (endPlan == currentTime) {
                                            // disable bluetooth
                                            BluetoothStateManager.disable()
                                                .then((result) => {
                                                    console.log(result);
                                                })
                                                .catch(err => console.log("Error disabling bluetooth while app is killed\n"+err));
                                        } else {
                                            console.log("No plans to trigger that time");
                                        }
                                    } else {
                                        console.log("No plans to run today");
                                    }
    
                                    break;
                            }
                        }));
                        await sleep(delay);
                    } catch (error) {
                        console.log(error);
                    }
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
                                    <Plan data={item} key={item.id} setload={setload} index={index + 1} />
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