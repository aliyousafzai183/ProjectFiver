import React from 'react';
import { View, Text, TouchableOpacity,Alert } from 'react-native';
import { deleteDoc, doc, collection } from 'firebase/firestore/lite';
import { db } from "../firebase/config"
// importing styles from style
import styles from '../styles/planComponentStyle';

// plan component
const Plan = ({ data, setload, index}) => {
    const Delete = async (item) => {
        try {
            const ref = await deleteDoc(doc(db, "plans", item));
            setload(prev => !prev);
        } catch (err) {
            Alert.alert(
                "No Internet!",
                "Please Connect to the internet",
                [
                  { text: "OK" }
                ]
              );
        }
    }

    const getTime = (raw) => {
        var t = new Date(raw*1000);
        var hours = t.getHours();
        var minutes = t.getMinutes();
        var newformat = t.getHours() >= 12 ? 'PM' : 'AM';
        
        // Find current hour in AM-PM Format 
        hours = hours % 12;
        
        // To display "0" as "12" 
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var formatted = ('0' + hours).slice(-2)
            + ':' + ('0' + minutes).slice(-2)
            + ' ' + newformat;
        return formatted;
    }
    return (
        <View style={styles.mainWrapper} >

            <View style={styles.wrapper1}>
                <Text style={styles.list}>{index}</Text>
            </View>

            <View style={styles.wrapper2}>
                <Text style={styles.list}>{getTime(data.start.seconds)}</Text>
            </View>

            <View style={styles.wrapper3}>
                <Text style={styles.list}>{getTime(data.end.seconds)}</Text>
            </View>

            <View style={styles.wrapper4}>
                <TouchableOpacity onPress={() => { Delete(data.id) }} ><Text style={styles.cancel}>X</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Plan;