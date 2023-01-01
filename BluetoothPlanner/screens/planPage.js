import * as React from 'react-native';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, View, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
// import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DateTimePickerAndroid from 'react-native-date-picker';
// importing styles from style
import styles1 from '../styles/planPageStyle';
import styles from "../styles/mainPageStyle";

// db file
import { addDoc, collection } from 'firebase/firestore/lite';
import { db } from '../firebase/config';

// for checkboxes
const initialState = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const planpage = ({ navigation }) => {

  // Code for reading start time and end time
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());

  // code for opening and closing date time picker
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  // saved days
  const [days, setDays] = useState(initialState);

  // checks
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  // save plan to db
  const addPlan = async () => {
    if (check1 && check2) {
      // code to add in db
      try {
        const docRef = await addDoc(collection(db, "plans"), {
          start: dateStart,
          end: dateEnd,
          monday: days.monday,
          tuesday: days.tuesday,
          wednesday: days.wednesday,
          thursday: days.thursday,
          friday: days.friday,
          saturday: days.saturday,
          sunday: days.sunday,
        });
        navigation.navigate('main');
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
      } catch (error) {
        console.log(error);
      }

    } else if (!check1 && check2) {
      Alert.alert(
        "Set Time-On",
        "Please set time on when to turn on the bluetooth automatically.",
        [
          { text: "OK" }
        ]
      );
    } else if (check1 && !check2) {
      Alert.alert(
        "Set Time-Off",
        "Please set time off when to turn off the bluetooth automatically.",
        [
          { text: "OK" }
        ]
      );
    } else {
      Alert.alert(
        "Set Time On/Off",
        "Please set time off and on when to turn on and off the bluetooth automatically.",
        [
          { text: "OK" }
        ]
      );
    }
  }

  const handleConfirm1 = (date) => {
    setCheck1(true)
    setDateStart(date)
    setOpenStart(false)
    const dateNow = new Date();
  }

  const handleConfirm2 = (date) => {
    setCheck2(true)
    setDateEnd(date)
    setOpenEnd(false)
    const dateNow = new Date();
  }

  return (
    <KeyboardAvoidingView style={styles.wrapper}>

      <View style={styles.wrapper1}>
        <Text style={styles.heading1}>Bluetooth</Text>
        <Text style={styles.heading1}>Planner</Text>
      </View>

      <View style={styles1.wrapper1}>
        <Text style={styles1.tag}>Repeats on:</Text>
        <View style={styles1.checkBoxMainWrapper}>
          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.monday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  monday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Monday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.tuesday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  tuesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Tuesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.wednesday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  wednesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Wednesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.thursday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  thursday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Thursday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.friday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  friday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Friday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.saturday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  saturday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Saturday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={days.sunday}
              onValueChange={value1 =>
                setDays({
                  ...days,
                  sunday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Sunday</Text>
          </View>

        </View>
      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
          onPress={() => setOpenStart(true)}
        >
          <Text style={styles1.heading1}>Time on</Text>
        </TouchableOpacity>

        <DateTimePickerAndroid
          modal
          open={openStart}
          date={dateStart}
          mode={'time'}
          is24Hour={true}
          onChange={(date) => {
            console.log(date)
            setDateStart(date);
          }}
          onConfirm={handleConfirm1}
          onCancel={() => {
            setOpenStart(false)
          }}
        />

      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
          onPress={() => setOpenEnd(true)}
        >
          <Text style={styles1.heading1}>Time off</Text>
        </TouchableOpacity>

        <DateTimePickerAndroid
          modal
          open={openEnd}
          date={dateEnd}
          mode={'time'}
          is24Hour={true}
          onChange={(date) => {
            console.log(date)
            setDateEnd(date);
          }}
          onConfirm={handleConfirm2}
          onCancel={() => {
            setOpenEnd(false)
          }}
        />
      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
          onPress={addPlan}
        >
          <Text style={styles1.heading1}>Save</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default planpage;