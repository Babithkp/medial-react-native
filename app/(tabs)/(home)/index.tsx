import React, { useState } from "react";import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";

import { trendingData } from "@/constant/mediaData";

export default function Page() {
  const [selected, setSelected] = useState<"trending" | "latest">("trending");
  const formatTimeDifference = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds >= 86400) {
      return `${Math.floor(diffInSeconds / 86400)}d`;
    } else if (diffInSeconds >= 3600) {
      return `${Math.floor(diffInSeconds / 3600)}h`;
    } else if (diffInSeconds >= 60) {
      return `${Math.floor(diffInSeconds / 60)}m`;
    } else {
      return `${diffInSeconds}s`;
    }
  };

  const sortedTrendingData = [...trendingData].sort(
    (a, b) => b.post.date.getTime() - a.post.date.getTime()
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row w-full bg-white">
        <TouchableOpacity
          onPress={() => setSelected("trending")}
          className={` w-1/2 flex items-center py-2 ${
            selected == "trending" ? "border-purple-500 border-b-2 " : ""
          }`}
        >
          <Text
            className={`font-bold ${
              selected == "trending" ? "text-purple-500" : ""
            }`}
          >
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("latest")}
          className={`w-1/2 flex items-center py-2 ${
            selected == "latest" ? "border-purple-500 border-b-2 " : ""
          }`}
        >
          <Text
            className={`font-bold ${
              selected == "latest" ? "text-purple-500 " : ""
            }`}
          >
            Latest
          </Text>
        </TouchableOpacity>
      </View>
      {selected == "trending" ? (
        <View className="bg-white flex-1">
          <FlatList
            data={trendingData}
            renderItem={(item) => (
              <View className="px-3 border-b border-gray-200 my-3 pb-3 flex-row gap-2">
                <View className="items-center ">
                  <Image
                    source={item.item.User.image}
                    className="h-10 w-10 rounded-full "
                  />
                  <View className="bg-slate-500 w-[2px] flex-1 my-1"></View>
                  <View className="bg-purple-200 rounded-full p-1">
                    <FontAwesome6
                      name="masks-theater"
                      size={24}
                      color="purple"
                    />
                  </View>
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-3">
                    <View>
                      <Text className="font-bold ">{item.item.User.name}</Text>
                      <Text className="text-sm">
                        {item.item.post.pod}{" "}
                        <Entypo name="dot-single" size={20} />
                        {formatTimeDifference(item.item.post.date) + " ago"}
                      </Text>
                    </View>
                    <Image
                      source={require("../../../assets/images/avatar-profile.jpg")}
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
                        <Text className="text-xs">
                          {item.item.post.likes} likes
                        </Text>
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
            )}
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View className="bg-white flex-1">
          <FlatList
            data={sortedTrendingData}
            renderItem={(item) => (
              <View className="px-3 border-b border-gray-200 my-3 pb-3 flex-row gap-2">
                <View className="items-center ">
                  <Image
                    source={item.item.User.image}
                    className="h-10 w-10 rounded-full "
                  />
                  <View className="bg-slate-500 w-[2px] flex-1 my-1"></View>
                  <View className="bg-purple-200 rounded-full p-1">
                    <FontAwesome6
                      name="masks-theater"
                      size={24}
                      color="purple"
                    />
                  </View>
                </View>
                <View className="flex-1">
                  <View className="flex-row justify-between items-center mb-3">
                    <View>
                      <Text className="font-bold ">{item.item.User.name}</Text>
                      <Text className="text-sm">
                        {item.item.post.pod}{" "}
                        <Entypo name="dot-single" size={20} />
                        {formatTimeDifference(item.item.post.date) + " ago"}
                      </Text>
                    </View>
                    <Image
                      source={require("../../../assets/images/avatar-profile.jpg")}
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
                        <Text className="text-xs">
                          {item.item.post.likes} likes
                        </Text>
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
            )}
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
