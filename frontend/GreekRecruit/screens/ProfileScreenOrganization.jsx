import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreenOrganization = ({ navigation }) => {
  const profileData = {
    name: "Sigma Chi",
    short_bio: "Sig Chi till I die -Omar",
    gallery: [
      require('../images/Sigma Chi House.jpg'),
      require('../images/Sigma Chi Flag.jpg'),
    ],
    events_list_dates: [
        "January 14", "January 15", "January 16", "January 19", "January 20"
    ],
    events_list_times: [
        "7:00pm", "7:00pm", "7:00pm", "7:00pm", "7:00pm"
    ],
    location: "40 Hardenberg St, New Brunswick, NJ",
    year_chartered: "2021"
  };

  return (
    <View style={styles.container}>
        <View style={styles.profileHeader}>
            <Image source={profileData.gallery[0]} style={styles.profilePic} />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>{profileData.name}</Text>
                <Text>{profileData.short_bio}</Text>
                <Text>Chartered: {profileData.year_chartered}</Text>
                <Text>Location: {profileData.location}</Text>
            </View>
        </View>
        <View style={styles.galleryContainer}>
            {profileData.gallery.slice(1).map((imageSrc, index) => (
                <Image key={index} source={imageSrc} style={styles.galleryImage} />
            ))}
        </View>
        <View style={styles.eventsContainer}>
            <Text style={styles.eventsHeader}>Upcoming Events</Text>
            {profileData.events_list_dates.map((date, index) => (
                <Text key={index} style={styles.eventText}>{date} at {profileData.events_list_times[index]}</Text>
            ))}
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
    borderRadius: 50,
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
  eventsContainer: {
    marginTop: 10,
  },
  eventsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventText: {
    fontSize: 16,
  },
});

export default ProfileScreenOrganization;
