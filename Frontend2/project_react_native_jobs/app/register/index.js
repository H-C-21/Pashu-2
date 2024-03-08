import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons } from "../../constants";
import { Link, Stack } from "expo-router";

export default function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("")

  return (
    <View style={styles.container}>
    <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />

          ),
          headerTitle: "",
        }}
      />
      {/* <Image style={styles.image} source={require("./assets/log2.png")} />  */}
      <StatusBar style="auto" />
      
      <View style={[styles.outerView, {flexDirection: "row"}]}>
      <View style={styles.innerView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="#003f5c"
          onChangeText={(firstName) => setFirstName(setFirstName)}
        /> 
      </View>
      <View style={styles.innerView}>      
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="#003f5c"
          onChangeText={(lastName) => setLastName(setLastName)}
        />
      </View>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone"
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity>
      <Link href='/login'>
        <Text style={styles.forgot_button}>Already Registered? Login!</Text> 
      </Link> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>REGISTER</Text> 
      </TouchableOpacity> 
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
  image: {
    marginBottom: 40,
  },

  outerView: {
    width: "80%",
    height: 45,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },

  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  innerView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "48%",
    height: 45,
    // marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#FF1493",
  },
});