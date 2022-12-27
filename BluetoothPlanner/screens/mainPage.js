import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

// db
import {db} from './config';
import { collection, getDocs,addDoc } from 'firebase/firestore';
import {async} from '@firebase/util';

// Importing style
import styles from "../styles/mainPageStyle";

// importing component
import Plan from '../components/PlanComponent';

const MainScreen = ({ navigation, plan }) => {
    const [value,setValue] = useState([]);
    
    const fetchData = async() =>{
        const data = [];
        try {
            const rep = await getDocs(collection(db,'plans'));
            rep.forEach(doc=>{
                data.push(doc.data());
            })

            setValue(data);

            console.log(data);
            navigation.navigate('planPage')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.wrapper1}>
                <Text style={styles.heading1}>Bluetooth</Text>
                <Text style={styles.heading1}>Planner</Text>
            </View>

            <View style={styles.wrapper2}>
                <Plan no="#" start="Start Time" end="End Time" del="Cancel" />

                <FlatList
                    style={{
                        paddingTop: 3,
                        paddingLeft: 2,
                        paddingRight: 10
                    }}
                    data={value}
                    keyExtractor={item => {
                        return item.id;
                    }}
                    renderItem={
                        ({ item, index }) => <Plan key={item.id} no={index + 1} start={item.start} end={item.stop} del="X" plan={plan} index={index} />
                    }
                />
                
            </View>

            <View style={styles.wrapper3}>
                <TouchableOpacity style={{
                    height: '38%',
                    backgroundColor: '#436AC8',
                    borderWidth: 1,
                    borderColor: '#295740',
                    padding: 10
                }}
                    onPress={fetchData}

                ><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default MainScreen;