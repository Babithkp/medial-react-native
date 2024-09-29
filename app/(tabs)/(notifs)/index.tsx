import { View, Text, Image } from "react-native";import React from "react";

export default function index() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-[0.12] items-center bg-purple-50 flex-row border-y border-purple-200">
        <Image
          source={require("../../../assets/images/avatar-profile.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1 justify-between flex-row px-5">
          <Text>Aditi started following you</Text>
          <Text>16h ago</Text>
        </View>
      </View>
      <View className="flex-[0.12] items-center bg-purple-50 flex-row border-y border-purple-200">
        <Image
          source={require("../../../assets/images/avatar-profile.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1 justify-between flex-row px-5">
          <Text>Aditi started following you</Text>
          <Text>16h ago</Text>
        </View>
      </View>
      <View className="flex-[0.12] items-center bg-purple-50 flex-row border-y border-purple-200">
        <Image
          source={require("../../../assets/images/avatar-profile.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1 justify-between flex-row px-5">
          <Text>Rishu started following you</Text>
          <Text>14h ago</Text>
        </View>
      </View>
      <View className="flex-[0.12] items-center bg-purple-50 flex-row border-y border-purple-200">
        <Image
          source={require("../../../assets/images/avatar-profile.jpg")}
          className="w-12 h-12 rounded-full"
        />
        <View className="flex-1 justify-between flex-row px-5">
          <Text className="w-[80%]">Aishwarya Raj Pandey started following you.</Text>
          <Text>16h ago</Text>
        </View>
      </View>
    </View>
  );
}
