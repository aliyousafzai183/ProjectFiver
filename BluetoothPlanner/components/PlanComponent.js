import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// importing styles from style
import styles from '../styles/planComponentStyle';

// plan component
const plan = ({ no, start, end, del ,plan, index}) => {

   

    return (
        <View style={styles.mainWrapper}>

            <View style={styles.wrapper1}>
                <Text style={styles.list}>{no}</Text>
            </View>

            <View style={styles.wrapper2}>
                <Text style={styles.list}>{start}</Text>
            </View>

            <View style={styles.wrapper3}>
                <Text style={styles.list}>{end}</Text>
            </View>

            <View style={styles.wrapper4}>
                <TouchableOpacity ><Text style={styles.cancel}>{del}</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default plan;