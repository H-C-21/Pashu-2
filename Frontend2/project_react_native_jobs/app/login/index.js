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
import { Link, Stack, useNavigation, useRouter } from "expo-router";

export default function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); 
  const navigation = useNavigation();
  console.log(navigation)
  return (
    <View style={styles.container}>
    <Stack.Screen
        options={{
          headerShown: false, 
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerTitle: "",
        }}
      />

      <Image style={styles.image} source={require("../../assets/images/mainicon-black.jpg")}></Image>

      <StatusBar style="auto" />
     
      <View style={styles.inputView}>
        <TextInput
          
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
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
    
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
    
      <Link href ='/homepage' style={styles.registerBtn} asChild>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
      </Link>
      
      {/* <View style={{marginTop:"2rem"}}> */}
        <Text style={styles.registerTxt}>
            Don't Have an Account Registered With Us?
        </Text>
        <Link href ='/register' style={styles.registerBtn} asChild>
     <TouchableOpacity style={styles.registerBtn}>
            <Text style={styles.loginText}>REGISTER</Text> 
      </TouchableOpacity> 
        </Link>
      {/* </View> */}
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
    backgroundColor: 'white',
    marginBottom: 10,
  },

  registerTxt:{
    marginTop: 40,
    marginBottom: 10,
    // fontSize: 20,
    color: "black",
  },    

  registerBtn:{
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.tertiary,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    // margin: 10,
    padding: 10,
    marginLeft: 0,
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: COLORS.tertiary,
  },
});