import React, { Component } from "react";
import {
  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image,  Dimensions
} from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
             <View style={styles.authorImageContainer}>
               <Image 
                 source={require("../assets/profile_img.png")}
                 style={styles.profileImage}
               ></Image>
               <View style={styles.authorNameContainer}>
                <Text style={styles.authorNameText}> {this.props.post.author} </Text>
               </View>
             </View>
              <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
              <View style={styles.captionContainer}>
                <Text style={styles.captionContainer}> 
                  {this.props.post.caption}
                </Text>
              </View>
              <View style={styles.actionContainer}>
              <View styles={styles.likeButton}>
                <IonIcons name={"heart"} size={RFValue(30)} color={"white"}/>
                <Text style={styles.likeText}>12k</Text>
              </View>
              </View>
           </View>
          </View>
          <Text style={{ color: "white" }}>Post Card!</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
