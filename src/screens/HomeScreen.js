import { SafeAreaView, Platform, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import HomeHeader from "../components/HomeHeader";
import HomeSearchBar from "../components/HomeSearchBar";
import MainCarousel from "../components/MainCarousel";
import Categories from "../components/Categories";
import HorizontalCard from "../components/HorizontalCard";
import VerticalCard from "../components/VerticalCard";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Container = styled.View`
  flex: 1;
  width: 100%;
`;

const isAndroid = Platform.OS === "android";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  }, []);

  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem("id");
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log("Error retrieving the data: ", error);
    }
  };

  return (
    <SafeAreaView
      style={{
        marginTop: isAndroid ? 30 : 0,
        backgroundColor: "#fff",
        flex: 1,
      }}
    >
      <HomeHeader userData={userData} />
      <HomeSearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainCarousel />
        <Categories />
        <HorizontalCard />
        <VerticalCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
