import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import useFetch from "../hooks/useFetch";

const MainCarousel = () => {
  const { sliders, isLoading, error } = useFetch();

  return (
    <View style={{ flex: 4, justifyContent: "center" }}>
      <Swiper
        height={150}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={2}
        activeDotColor="#F49F1C"
      >
        <View style={styles.slide1}>
          <Image source={require("../assets/images/slider-1.png")} />
        </View>
        <View style={styles.slide2}>
          <Image source={require("../assets/images/slider-1.png")} />
        </View>
        <View style={styles.slide3}>
          <Image source={require("../assets/images/slider-1.png")} />
        </View>
      </Swiper>
    </View>
  );
};

export default MainCarousel;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
});
