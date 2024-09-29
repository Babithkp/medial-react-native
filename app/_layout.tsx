import React, { useEffect, useState } from "react";import { Stack } from "expo-router";
import { getItem, setItem } from "@/constant/asyncStorage";

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
        <Stack.Screen name="OnBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="createPost"
          options={{
            title: "Create Post",
            headerTitleAlign: "center",
          }}
        />
      </Stack>
    );
  } else {
    return (
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="OnBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="createPost" options={{
            title: "Create Post",
            headerTitleAlign: "center",
          }} />
      </Stack>
    );
  }
}
