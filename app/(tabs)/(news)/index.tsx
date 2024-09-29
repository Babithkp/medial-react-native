import { View, Text, FlatList, Image } from "react-native";import React, { useEffect, useState } from "react";
import { getNews } from "@/constant/https";
import Entypo from "@expo/vector-icons/Entypo";
import { formatTimeDifference } from "@/constant/asyncStorage";

export default function index() {
  const [news, setNews] = useState<any>([]);
  

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    fetchNews();
  }, []);
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={news.articles}
        renderItem={(item) => (
          <View className="flex-1">
            <View>
              <Image
                source={{ uri: item.item.urlToImage }}
                className="h-[30vh] w-full relative"
              />
              <Text className="absolute bottom-5 right-0 left-0 text-white text-xl font-bold px-3 text-center">
                {item.item.title}
              </Text>
            </View>
            <View className="p-3 flex flex-row ">
                <Text>{item.item.source.name}</Text>
                <Entypo name="dot-single" size={20} />
                <Text>{formatTimeDifference(item.item.publishedAt)} ago</Text>
            </View>
            <View className="h-full px-3 pb-52">
              <Text className="text-sm">
                {item.item.description}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item,i) => i.toString()}
        bounces={false}

      />
    </View>
  );
}
