import { View, Text, StyleSheet } from "react-native";

const HomeScreenRecruiter = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To the Homescreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20, // You can adjust the font size as needed
  },
});

export default HomeScreenRecruiter;
