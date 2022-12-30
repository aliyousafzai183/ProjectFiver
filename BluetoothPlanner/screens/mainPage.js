import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, SafeAreaView, RefreshControl, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// db file
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

// Importing style
import styles from "../styles/mainPageStyle";
import styles1 from '../styles/planComponentStyle';

// importing component
import Plan from '../components/PlanComponent';

// bluetooth
// import BluetoothStateManager from 'react-native-bluetooth-state-manager';
// import {PERMISSIONS} from 'react-native-permissions';

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


    // BluetoothStateManager.getState().then((bluetoothState) => {
    //     console.log(bluetoothState);
    // });

    // BluetoothStateManager.enable().then((result) => {
    //     // do something...
    // });

    // BluetoothStateManager.disable().then((result) => {
    //     // do something...
    // });

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

                        <View style={styles1.wrapper1}>
                            <Text style={styles1.list}>#</Text>
                        </View>
                        <View style={styles1.wrapper2}>
                            <Text style={styles1.list}>Start-Time</Text>
                        </View>
                        <View style={styles1.wrapper3}>
                            <Text style={styles1.list}>End-Time</Text>
                        </View>

                        <View style={styles1.wrapper4}>
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
                            data?.map((item => {
                                return (
                                    <Plan data={item} key={item.id} setload={setload} />
                                )
                            }))
                        }
                    </ScrollView>

                </View>

                <View style={styles.wrapper3}>
                    <TouchableOpacity style={{
                        height: '38%',
                        backgroundColor: '#436AC8',
                        borderWidth: 1,
                        borderColor: '#295740',
                        padding: 10
                    }}
                        onPress={() => navigation.navigate('planPage')}

                    ><Text style={styles.button}>+</Text></TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }



}

export default MainScreen;