import { View, Text } from "react-native";import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { getItem } from "@/constant/asyncStorage";
import { Tabs } from "expo-router";
import OnBoarding from "./OnBoarding";
import Page from "./(tabs)/(home)/index";

export default function _layout() {
  const [onBoarded, setOnBoarded] = useState(false);

  useEffect(() => {
    checkUserOnboarding();
  }, []);
  const checkUserOnboarding = async () => {
    const userOnboarding = await getItem("onBoarded");
    
    if (userOnboarding == null) {
      setOnBoarded(false);
    } else {
      setOnBoarded(true);
    }
  };

  if (onBoarded) {
    return (
      <Stack initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)"options={{ headerShown: false }} />
      </Stack>
    );
  } else {
    return (
      <Stack initialRouteName="(tabs)">
        <Stack.Screen
          name="OnBoarding"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(tabs)"options={{ headerShown: false }} />
      </Stack>
    );
  }

}
