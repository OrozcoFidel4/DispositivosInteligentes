import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoScreen =() =>{
    return(
        <View className="mt-10 ml-5 mr-5">
            <Text className="font-bold mb-10 text-center">Disfruta Del Video</Text>
            <YoutubePlayer
            height={300}
            play={true}
            videoId={"-hdgLTLAQcc"}
            viewContainerStyle ={
                marginTop = "10%"
            }
            />
            
        </View>
    );
}

export default VideoScreen;