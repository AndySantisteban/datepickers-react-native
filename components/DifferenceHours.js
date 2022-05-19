import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { stylesApp } from "../styles/app.style";

export default function DifferenceDate() {
  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());
  const [showFirstPicker, setShowFirstPicker] = useState(false);
  const [showSecondPicker, setShowSecondPicker] = useState(false);
  const [difference, setDifference] = useState(0);
  const [mode, setMode] = useState("time");

  const onChangeFirst = (event, selectedDate) => {
    setShowFirstPicker(false);
    setFirstDate(selectedDate);
  };
  const onChangeSecond = (event, selectedDate) => {
    setShowSecondPicker(false);
    setSecondDate(selectedDate);
  };

  const showMode = (currentMode) => {
    setShowFirstPicker(true);
    setMode(currentMode);
  };
  const showMode2 = (currentMode) => {
    setShowSecondPicker(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("time");
  };

  const showDatepicker2 = () => {
    showMode2("time");
  };

  function getDifference() {
    // calculate difference of hours
    const differenceInMilliseconds = Math.abs(
      firstDate.getTime() - secondDate.getTime()
    );
    const differenceInHours = Math.ceil(
      differenceInMilliseconds / (1000 * 3600)
    );
    setDifference(differenceInHours);
  }

  return (
    <View style={styles.container}>
      <View style={styles.container__input}>
        <Text style={styles.title}>Seleccione la hora:</Text>
        <TextInput
          value={firstDate.toLocaleTimeString()}
          onPressIn={showDatepicker}
          style={styles.input}
        />
      </View>
      <View style={styles.container__input}>
        <Text style={styles.title}>Seleccione la hora:</Text>
        <TextInput
          value={secondDate.toLocaleTimeString()}
          onPressIn={showDatepicker2}
          style={styles.input}
        />
      </View>
      <View style={styles.container__input}>
        <Text style={styles.title}>Diferencia entre las horas:</Text>
        <Text style={styles.result}>{`${difference} horas`}</Text>
      </View>
      <View>
        <Button
          style={styles.button}
          title="Calcular"
          onPress={() => {
            getDifference();
          }}
          color={"#008080"}
        />
      </View>
      {showFirstPicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={firstDate}
          mode={mode}
          is24Hour={true}
          onChange={onChangeFirst}
        />
      )}
      {showSecondPicker && (
        <DateTimePicker
          testID="dateTimePickerTwo"
          value={secondDate}
          mode={mode}
          is24Hour={true}
          onChange={onChangeSecond}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(stylesApp);
