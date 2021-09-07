import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//export default function App() {
function App(props) {
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
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            props.navigation.navigate("Somos", {
              edad: 45,
              nombre: "Hola desde el inicio",
              salario: 2500000,
            })
          }
        >
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
class Somos extends React.Component {
  /*Características de la pantalla como título - header*/
  static navigationOptions = {
    title: "Somos",
    headerStyle: {
      backgroundColor: "orange",
    },
    headerTintColor: "red",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Somos</Text>
        <Button
          title="Ir a Inicio"
          onPress={() => this.props.navigation.navigate("Inicio")}
        />
        <Text>
          Edad:{" "}
          {JSON.stringify(navigation.getParam("edad", "No se envió edad"))}
          {/* itemId: {navigation.getParam('itemId', 'NO-ID')} */}
        </Text>
        <Text>
          Nombre: {navigation.getParam("nombre", "")}
          {/* otherParam: {JSON.stringify(navigation.getParam('otherParam', 'default value'))} */}
        </Text>
        <Text>
          Salario: {navigation.getParam("salario", "0") * 2}
        </Text>
      </View>
    );
  }
}
// Pila de pantallas

const RootStack = createStackNavigator(
  {
    Inicio: App,
    Somos: Somos,
    /*Contacts: Contactus,
    Photos: Photos,
    CUs: CUs,*/
  },
  {
    initialRouteName: "Inicio",
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App1 extends React.Component {
  render() {
    return <AppContainer />;
  }
}

// fin pila de pantallas

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
