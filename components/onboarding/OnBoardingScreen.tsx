import {
  View,
  Text,
  useWindowDimensions,
  Animated,
  FlatList,
  Image,
} from "react-native";
import React, { useRef, useState } from "react";
const onBoadingData = [
  {
    id: 1,
    title: "Connect with",
    description: "Industry Proffessionals",
    image: require("../../assets/images/people.jpg"),
  },
  {
    id: 2,
    title: "Next Gen Professional",
    description: "Social media",
    image: require("../../assets/images/social.jpg"),
  },
  {
    id: 3,
    title: "Stay updated with",
    description: "lastest startup news",
    image: require("../../assets/images/women.jpg"),
  },
];

export default function OnBoardingScreen() {
  const { width } = useWindowDimensions();
  const [currectIndex, setCurrectIndex] = useState(0);
  const slidesRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: any }) => {
      setCurrectIndex(viewableItems[0].index);
    }
  ).current;
  return (
    <View className="h-[100px] items-center ">
      <FlatList
        data={onBoadingData}
        renderItem={({ item }) => (
          <View
            className={`w-[${width}px] flex-1 items-center justify-center px-2`}
            style={{ width }}
          >
            <Image source={item.image} className="w-[20px] h-[20px] object-cover" />
            <Text className="text-white text-2xl font-bold">{item.title}</Text>
            <Text className="text-white text-xl ">{item.description}</Text>
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
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
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
              style={{ opacity }}
              key={i.toString()}
              className="flex-1 h-[10px] bg-white rounded-full w-[10px]"
            ></Animated.View>
          );
        })}
      </View>
    </View>
  );
}
