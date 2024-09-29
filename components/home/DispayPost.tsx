import { View, Text, Image } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { formatTimeDifference } from "@/constant/asyncStorage";

export default function DispayPost({ item }: { item: any }) {
    
  return (
    <View className="px-3 border-b border-gray-200 my-3 pb-3 flex-row gap-2">
      <View className="items-center ">
        <Image
          source={item.item.User.image}
          className="h-10 w-10 rounded-full "
        />
        <View className="bg-slate-500 w-[2px] flex-1 my-1"></View>
        <View className="bg-purple-200 rounded-full p-1">
          <FontAwesome6 name="masks-theater" size={24} color="purple" />
        </View>
      </View>
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-3">
          <View>
            <Text className="font-bold ">{item.item.User.name}</Text>
            <Text className="text-sm">
              {item.item.post.pod} <Entypo name="dot-single" size={20} />
              {formatTimeDifference(item.item.post.date) + " ago"}
            </Text>
          </View>
          <Image
            source={require("../../assets/images/avatar-profile.jpg")}
            className="h-10 w-10 "
          />
        </View>
        <View>
          <Text className="text-base mb-3">
            {item.item.post.caption.substring(0, 200)}
          </Text>
          <View>
            {item.item.post.image && (
              <Image
                source={item.item.post.image}
                className="w-full h-52 rounded-lg"
                resizeMode="stretch"
              />
            )}
          </View>

          <View className="flex-row my-2 justify-between">
            <View className="flex-row items-center ">
              <Text className="text-purple-500 font-bold text-xs">
                30 replies
              </Text>
              <Entypo name="dot-single" size={20} />
              <Text className="text-xs">{item.item.post.likes} likes</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Feather name="bookmark" size={24} />
              <Feather name="heart" size={24} />
              <Feather name="send" size={24} />
              <Ionicons name="ellipsis-vertical-outline" size={24} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
