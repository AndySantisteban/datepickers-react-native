import Checkbox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DifferenceDate from "./components/DifferenceDate";
import DifferenceHours from "./components/DifferenceHours";
import { stylesApp } from "./styles/app.style";

export default function App() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Calculadora de tiempo</Text>
      <View style={styles.container__options}>
        <View style={styles.container__options__select}>
          <Checkbox
            value={checked}
            style={{ marginEnd: 10 }}
            onValueChange={() => {
              setChecked(!checked);
              setChecked2(false);
            }}
          />
          <Text>Calcular Fecha</Text>
        </View>
        <View style={styles.container__options__select}>
          <Checkbox
            style={{ marginEnd: 10 }}
            value={checked2}
            onValueChange={() => {
              setChecked2(!checked2);
              setChecked(false);
            }}
          />
          <Text>Calcular Tiempo</Text>
        </View>
      </View>
      {checked && <DifferenceDate />}
      {checked2 && <DifferenceHours />}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create(stylesApp);
