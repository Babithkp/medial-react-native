import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { trendingData } from "@/constant/mediaData";
import DispayPost from "@/components/home/DispayPost";
import Octicons from "@expo/vector-icons/Octicons";
import { useRouter } from "expo-router";

export default function Page() {
  const [selected, setSelected] = useState<"trending" | "latest">("trending");
  const router = useRouter();

  const sortedTrendingData = [...trendingData].sort(
    (a, b) => b.post.date.getTime() - a.post.date.getTime()
  );

  const createPostHandler = () => {
    router.navigate("/createPost");
  };

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
            renderItem={(item) => <DispayPost item={item} />}
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ) : (
        <View className="bg-white flex-1">
          <FlatList
            data={sortedTrendingData}
            renderItem={(item) => <DispayPost item={item} />}
            bounces={false}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
      <TouchableOpacity
        className="absolute right-0 bottom-0 m-5 bg-purple-200 p-4 rounded-2xl"
        onPress={createPostHandler}
      >
        <Octicons name="pencil" size={25} color="purple" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
