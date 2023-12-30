import React, { useState } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";


const CreateAccountScreen = ({ navigation }) => {

  const defaultEmailDomain = "@scarletmail.rutgers.edu";
  const [emailPrefix, setEmailPrefix] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [isInvalidEmail, setInvalidEmail] = useState(false);
  const [isInvalidPhoneNumber, setInvalidPhoneNumber] = useState(false);
  const [isInvalidFirstName, setInvalidFirstName] = useState(false);
  const [isInvalidLastName, setInvalidLastName] = useState(false);
  const [isInvalidPassword, setInvalidPassword] = useState(false);
  const [isPasswordMismatch, setPasswordMismatch] = useState(false);
  const email = emailPrefix + defaultEmailDomain;


  const isValidEmail = () => {
    const emailRegex = /^[^\s@]+@scarletmail\.rutgers\.edu$/;

    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;

    return nameRegex.test(name);
  };

  const isValidPassword = () => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@!#$%&])[A-Za-z\d@!#$%&]{8,}$/;

    return passwordRegex.test(password) && password === confirmPassword;
  };

  const isValidPhoneNumber = () => {

    const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
    const isValid = phoneNumberPattern.test(phoneNumber);

    return isValid;
  };

  const handleCreateAccount = async () => {

    // Validate email
    if (!isValidEmail()) {
      setInvalidEmail(true);
      return;
    } else {
      setInvalidEmail(false);
    }

    // Validate phone number
    if(!isValidPhoneNumber()){
      setInvalidPhoneNumber(true);
      return;
    }else{
      setInvalidPhoneNumber(false);
    }

    // Validate first name
    if (!isValidName(firstName)) {
      setInvalidFirstName(true);
      return;
    } else {
      setInvalidFirstName(false);
    }

    // Validate last name
    if (!isValidName(lastName)) {
      setInvalidLastName(true);
      return;
    } else {
      setInvalidLastName(false);
    }

    // Validate password
    if (!isValidPassword()) {
      setInvalidPassword(true);
      return;
    } else {
      setInvalidPassword(false);
    } 

    // If all validations pass, proceed with account creation
    if (isValidEmail() && isValidPhoneNumber() && isValidName(firstName) && isValidName(lastName) && isValidPassword()) {
      try {

        // Navigate to the login screen upon successful account creation
        navigation.navigate("LoginScreen");

      } catch (error) {

        // Handle errors during account creation
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

      }
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstname(text)}
        />
        {isInvalidFirstName && (
          <Text style={styles.invalidText}>
            Invalid First Name. Please enter a valid name.
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLastname(text)}
        />
        {isInvalidLastName && (
          <Text style={styles.invalidText}>
            Invalid Last Name. Please enter a valid name.
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.emailInputContainer}>
          <TextInput
            style={styles.emailInput}
            placeholder="NetID"
            value={emailPrefix}
            onChangeText={(text) => setEmailPrefix(text)}
          />
          <Text style={styles.emailDomain}> {defaultEmailDomain}</Text>
        </View>
        {isInvalidEmail && (
          <Text style={styles.invalidText}>
            Invalid Email. Please enter a valid email address.
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        {isInvalidPassword && (
          <Text style={styles.invalidText}>
            Password must contain at least one uppercase letter, one number, and
            one special character (@, !, #, $, %, &).
          </Text>
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {isPasswordMismatch && (
          <Text style={styles.invalidText}>
            Passwords do not match. Please try again.
          </Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
        {isInvalidPhoneNumber && (
          <Text style={styles.invalidText}>
            Please enter a valid phone number. 
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleCreateAccount}
      >
        <Text style={styles.loginButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    position: "absolute",
    top: 140, 
    alignItems: "center",
  },
  logo: {
    width: 300, 
    height: 90,
  },
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
  inputSwitchContainer: {
    marginTop: 12,
    width: "100%",
  },
  emailInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderRadius: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 8,
    width: "100%",
    borderRadius: 15,
  },
  emailInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 8,
    borderRadius: 15,
  },
  invalidText: {
    color: "red",
    marginTop: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchText: {
    marginHorizontal: 10,
    color: "#FF392E",
  },
  signupButton: {
    backgroundColor: "#FF392E",
    padding: 15,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
  },
  signupButtonText: {
    color: "#E6E6E6",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "white",
    padding: 15,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 15,
  },
  loginButtonText: {
    color: "#FF392E",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CreateAccountScreen;