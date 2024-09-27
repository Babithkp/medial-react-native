import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { setItem } from "@/constant/asyncStorage";
import { router } from "expo-router";
const onBoadingData = [
  {
    id: 1,
    title: "Connect with",
    description: "Industry Proffessionals",
    image: require("../assets/images/social.jpg"),
  },
  {
    id: 2,
    title: "Next Gen Professional",
    description: "Social media",
    image: require("../assets/images/people.jpg"),
  },
  {
    id: 3,
    title: "Stay updated with",
    description: "lastest startup news",
    image: require("../assets/images/women.jpg"),
  },
];

export default function OnBoarding() {
  const { width } = useWindowDimensions();
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onLoginHandler = () =>{
    setItem("onBoarded", "true");
    router.push('/');
  }
  return (
    <SafeAreaView className="h-full justify-between ">
      <StatusBar style="auto" />
      <View className="flex-1 items-center ">
        <FlatList
          data={onBoadingData}
          renderItem={({ item }) => (
            <View
            key={item.id}
              className={`w-[${width}px] flex-1 items-center justify-center px-2`}
              style={{ width }}
            >
              <Image source={item.image} className="w-3/4 h-1/2 object-cover" />
              <Text className=" text-lg font-bold mt-2 text-black">
                {item.title}
              </Text>
              <Text className=" text-sm ">{item.description}</Text>
            </View>

          )}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          keyExtractor={(item) => item.id.toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          ref={slidesRef}
        />
        <View className="flex flex-row h-[64px] w-[50px] gap-2">
          {onBoadingData.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
       
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
              style={{opacity}}
                key={i.toString()}
                className="flex-1 h-[10px] bg-black rounded-full w-[10px]"
              ></Animated.View>
            );
          })}
        </View>
      </View>
      <View className="h-[40%] flex items-center justify-around ">
        <Text className="text-3xl font-bold uppercase ">Medial</Text>
        <TouchableOpacity className="bg-red-500 py-2 px-10 rounded-xl " onPress={onLoginHandler}>
          <View className="flex flex-row items-center gap-2 justify-center">
            <FontAwesome name="google" size={24} color="black" />
            <Text>Login with google</Text>
          </View>
        </TouchableOpacity>
        <Text className="text-slate-500 text-center w-3/4">
          By Clicking Login, you agree to our Terms and acknowlege that you have
          read our Privacy Policy. Which explains how to opt out of offers and
          promos
        </Text>
      </View>
    </SafeAreaView>
  );
}
