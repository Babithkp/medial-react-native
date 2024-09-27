import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

const purple = "#800080";

export default function TabLayout() {
  const profile = () => {
    return (
      <Image
        source={require("../../assets/images/avatar-profile.jpg")}
        className="w-10 h-10 rounded-full ml-5"
      />
    );
  };

  const homeOption = () => {
    return (
      <View className="flex-row gap-3 mr-3">
        <Ionicons size={28} name="chatbubbles-outline" />
        <MaterialCommunityIcons size={28} name="widgets-outline" />
      </View>
    );
  };

  const newsOption = () => {
    return (
      <View className="flex-row gap-3 mr-3 items-center">
        <Feather size={25} name="server" />
        <Text className="font-bold text-purple-500">Articles</Text>
      </View>
    )
  }

  const showcaseOption = () => {
    return (
      <View className="flex-row gap-3 mr-3 items-center">
        <Feather size={28} name="search"  />
        <Entypo size={28} name="bug"  />
        <Feather size={28} name="send"  />
      </View>
    )
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="(home)/index"
        options={{
          title: "Medial",
          tabBarIcon: ({ color, focused }) => (
            <Octicons size={28} name="home"  color={focused ? purple : color} />
          ),
          headerTitle: "Medial",
          headerLeft: profile,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight:homeOption,
          tabBarActiveTintColor: purple,
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tabs.Screen
        name="(news)/index"
        options={{
          title: "News",
         
          headerTitle: "Medial",
          headerLeft: profile,
          headerRight: newsOption,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({color, focused}) => (
            <Feather size={28} name="minus-square" color={focused ? purple : color} />
          ),
          tabBarActiveTintColor: purple,
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tabs.Screen
        name="(showcase)/index"
        options={{
          title: "Showcase",
          headerLeft: profile,
          headerRight: showcaseOption,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={28} name="rocket-outline"  color={focused ? purple : color} />
          ),
          tabBarActiveTintColor: purple,
          tabBarInactiveTintColor: 'gray',
        }}
      />
      <Tabs.Screen
        name="(search)/index"
        options={{
          title: "Search",
          headerLeft: profile,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <Feather size={28} name="search"  color={focused ? purple : color} />
          ),
          tabBarActiveTintColor: purple,
          tabBarInactiveTintColor: 'gray',
          
        }}
      />
      <Tabs.Screen
        name="(notifs)/index"
        options={{
          title: "Notifs.",
          headerTitle: "Notifications",
          headerLeft: profile,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          tabBarIcon: ({ color, focused }) => (
            <Feather size={28} name="bell"  color={focused ? purple : color} />
          ),
          tabBarActiveTintColor: purple,
          tabBarInactiveTintColor: 'gray',
        }}
      />
    </Tabs>
  );
}
