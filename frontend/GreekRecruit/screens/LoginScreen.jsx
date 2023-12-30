import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Keyboard,} from "react-native";
import { Alert } from "react-native";


/**
 * LoginPage is a React component representing the login screen.
 *
 * @param {object} navigation - React Navigation object for navigation control.
 */
const LoginScreen = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <KeyboardAvoidingView style={styles.mainContainer} behavior="height">

        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
        />
        </View>
        <View style={styles.inputContainer}>
        <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.forgotPasswordContainer}>
            <Text
            style={styles.forgotPasswordText}
            >
            Forgot Password?
            </Text>
        </View>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation.navigate("CreateAccountScreen")}
        >
        <Text style={styles.createAccountButtonText}>Create Account</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    );
};

LoginScreen.navigationOptions = {
    title: "", // Set your custom title here
  };

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E6E6E6",
  },
  inputContainer: {
    marginBottom: 12,
    width: "80%",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 8,
    width: "100%",
    color: "#4A4A4A",
    borderRadius: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 160,
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 90,
  },
  forgotPasswordContainer: {
    marginTop: 5,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#FF392E",
  },
  loginButton: {
    backgroundColor: "#FF392E",
    padding: 15,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
  },
  loginButtonText: {
    color: "#E6E6E6",
    fontSize: 16,
    fontWeight: "bold",
  },
  createAccountButton: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 11,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
  },
  createAccountButtonText: {
    color: "#FF392E",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
