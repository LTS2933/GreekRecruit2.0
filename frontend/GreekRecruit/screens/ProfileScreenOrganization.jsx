import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

const ProfileScreenOrganization = ({ navigation }) => {
  const ProfileData = {
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
    
  );
}

export default ProfileScreenOrganization;
