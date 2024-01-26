import {View, Text, StyleSheet, ScrollView, Image} from "react-native";

const LikedPnmScreen = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    {[...Array(5)].map((_, index) => (
                        <View key={index} style={styles.profileHeader}>
                            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profilePic} />
                            <View style={styles.profileInfo}>
                                <Text style={styles.name}>John Doe</Text>
                                <Text>Class of 2026</Text>
                                <Text>GPA: 3.22</Text>
                                <Text>Email: john@gmail.com</Text>
                                <Text>Instagram: john_doe</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: '#fff',
        flexWrap: 'wrap',
        width: '120%', // Adjust this value as needed
        alignSelf: 'center', // This centers the container
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50, // makes it circular
        marginRight: 20,
    },
    profileInfo: {
        justifyContent: 'space-around',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    galleryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    galleryImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    interestsText: {
        fontSize: 18,
    },
});

export default LikedPnmScreen;