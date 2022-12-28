import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList,ActivityIndicator } from 'react-native';

// db file
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from './config';

// Importing style
import styles from "../styles/mainPageStyle";

// importing component
import Plan from '../components/PlanComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Value } from 'react-native-reanimated';

const MainScreen = ({ navigation }) => {
    // const [value, setValue] = useState([]);
    const [loading, setLoading] = useState(true);
    let data=[];

    useEffect(() => {
        try {
            async function fetchData() {
                const plansCol = collection(db, 'plans');
                const plansSnapshot = await getDocs(plansCol);
                const plansList = plansSnapshot.docs.map(doc => doc.data());
                data = plansList;
                console.log(plansList);
                console.log(data);
                data.forEach(element => {
                    console.log(element.startingon + " === " + element.endingon);
                });
                setLoading(false);
                return plansList;
            }

            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [])

    if (loading) {
        return (
            <View style={{
                height:700,
                marginTop:300
            }}>
                <ActivityIndicator />
            </View>
        )
    }else{
        return (

            <SafeAreaView style={styles.wrapper}>
                <View style={styles.wrapper1}>
                    <Text style={styles.heading1}>Bluetooth</Text>
                    <Text style={styles.heading1}>Planner</Text>
                </View>
    
                <View style={styles.wrapper2}>
                    <Plan no="#" start="Start Time" end="End Time" del="Cancel" />
    
                    {/* <FlatList
                        style={{
                            paddingTop: 3,
                            paddingLeft: 2,
                            paddingRight: 10
                        }}
                        data={data}
                        renderItem={({ item }) => (
                            <Plan start={item.startingon} end={item.endingon} del="X" />
                        )}
                        keyExtractor={(item) => item.id.toString()}
                    /> */}
    
                    <ScrollView
                        style={{
                            paddingTop: 3,
                            paddingLeft: 2,
                            paddingRight: 10
                        }}>
                        {
                            data.forEach(item => {
                                <Plan start={item.startingon} end={item.endingon} del="X" />
                            })
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