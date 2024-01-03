import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    // Mock data for the profile
    const profileData = {
        name: 'Liam Smith',
        graduationYear: '2024',
        gpa: '3.66',
        email: 'liamsmith@example.com',
        instagramHandle: '@liam.smith12',
        imageUrl: 'https://via.placeholder.com/100', // Placeholder for a profile image
        interests: ['Coding', 'Photography', 'Hiking'], // Example interests
        gallery: [ // Placeholder images for the gallery
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100',
            'https://via.placeholder.com/100'
        ],
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
            <View style={styles.galleryContainer}>
                {profileData.gallery.map((imageUri, index) => (
                    <Image key={index} source={{ uri: imageUri }} style={styles.galleryImage} />
                ))}
            </View>
            <Text style={styles.interestsText}>
                Interests: {profileData.interests.join(', ')}
            </Text>
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
    galleryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    galleryImage: {
        width: 100,
        height: 100,
        borderRadius: 10, // slightly rounded corners for gallery images
    },
    interestsText: {
        fontSize: 18,
    },
});

export default ProfileScreen;
