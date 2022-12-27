import * as React from 'react-native';
import { useState, useEffect } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, View, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

// importing styles from style
import styles1 from '../styles/planPageStyle';
import styles from "../styles/mainPageStyle";

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
  const [dateStart, setDateStart] = useState(new Date(1598051730000));
  const [dateEnd, setDateEnd] = useState(new Date(1598051730000));
  // saved days
  const [value, setValue] = useState(initialState);

  let one = false;
  let two = false;

  const addPlans = async () => {
  }

  // // save plan to db
  // const savePlan = () => {
  //   if (one && two) {

  //        // code to add in db



  //   } else if (!one && two) {
  //     Alert.alert(
  //       "Set Time-On",
  //       "Please set time on when to turn on the bluetooth automatically.",
  //       [
  //         { text: "OK" }
  //       ]
  //     );
  //   } else if (one && !two) {
  //     Alert.alert(
  //       "Set Time-Off",
  //       "Please set time off when to turn off the bluetooth automatically.",
  //       [
  //         { text: "OK" }
  //       ]
  //     );
  //   } else {
  //     Alert.alert(
  //       "Set Time On/Off",
  //       "Please set time off and on when to turn on and off the bluetooth automatically.",
  //       [
  //         { text: "OK" }
  //       ]
  //     );
  //   }
  // }

  const timeStart = dateStart.toLocaleString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const timeEnd = dateEnd.toLocaleString([], {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  const onChangeStart = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateStart(currentDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateEnd(currentDate);
  };

  const showModeStart = (currentMode) => {
    DateTimePickerAndroid.open({
      value: dateStart,
      onChangeStart,
      mode: currentMode,
      is24Hour: true,
    });
    one = true;
  };

  const showModeEnd = (currentMode) => {
    DateTimePickerAndroid.open({
      value: dateStart,
      onChangeEnd,
      mode: currentMode,
      is24Hour: true,
    });
    two = true;
  };

  const showTimepickerStart = () => {
    showModeStart('time');
  };

  const showTimepickerEnd = () => {
    showModeEnd('time');
  };

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
              value={value.monday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  monday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Monday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.tuesday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  tuesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Tuesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.wednesday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  wednesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Wednesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.thursday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  thursday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Thursday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.friday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  friday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Friday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.saturday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  saturday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Saturday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
            <CheckBox
              value={value.sunday}
              onValueChange={value1 =>
                setValue({
                  ...value,
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
          onPress={showTimepickerStart}
        >
          <Text style={styles1.heading1}>Time on</Text>

        </TouchableOpacity>
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
          onPress={showTimepickerEnd}
        >
          <Text style={styles1.heading1}>Time off</Text>
        </TouchableOpacity>
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
          onPress={addPlans}
        >
          <Text style={styles1.heading1}>Save</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default planpage;