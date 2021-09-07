import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const onContar = () => {
    setContador((anterior) => anterior + 1);
  };
  const onDescontar = () => {
    setContador((anterior) => anterior - 1);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text> Manejo de varias Pantallas</Text>
      </View>
      <View>
        <Text> Contador: {contador}</Text>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "yellow" }}>
        <TouchableOpacity style={styles.button} onPress={onContar}>
          <Text style={styles.text}>Contar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onDescontar}>
          <Text style={styles.text}>Descontar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", backgroundColor: "yellow" }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Quienes Somos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Contáctenos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Grid</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: { margin: 5, backgroundColor: "aqua", padding: 5, borderRadius: 5 },
  text: { fontWeight: "bold", textAlign: "center", color: "blue" },
});
