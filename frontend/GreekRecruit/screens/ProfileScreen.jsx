import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    // Mock data for the profile
    const profileData = {
        name: 'John Doe',
        graduationYear: '2024',
        gpa: '3.8',
        email: 'johndoe@example.com',
        instagramHandle: '@johndoe',
        imageUrl: 'https://via.placeholder.com/100', // Placeholder for a profile image
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image source={{ uri: profileData.imageUrl }} style={styles.profilePic} />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{profileData.name}</Text>
                    <Text>Class of {profileData.graduationYear}</Text>
                    <Text>GPA: {profileData.gpa}</Text>
                    <Text>Email: {profileData.email}</Text>
                    <Text>Instagram: {profileData.instagramHandle}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
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
});

export default ProfileScreen;
