import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
} from "react-native";


export default function CustomNav() {
    const [selected, setSelected] = useState<"trending" | "latest">("trending");
  return (
    <View className="flex-row w-full bg-black flex-1">
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
  )
}