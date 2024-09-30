import { View, Text, Image, TextInput, Button, TouchableOpacity } from "react-native";import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import DropDownPicker from "react-native-dropdown-picker";
import Octicons from "@expo/vector-icons/Octicons";

export default function createPost() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: "News",
      value: "apple",
      icon: () => <Octicons name="pencil" size={25} color="purple" />,
    },
    {
      label: "Central Pod",
      value: "banana",
      icon: () => <Octicons name="pencil" size={25} color="purple" />,
    },
    {
      label: "Ai Takeover",
      value: "chdserry",
      icon: () => <Octicons name="pencil" size={25} color="purple" />,
    },
    {
      label: "Dev",
      value: "ad",
      icon: () => <Octicons name="pencil" size={25} color="purple" />,
    },
    {
      label: "Idea Validation",
      value: "cd",
      icon: () => <Octicons name="pencil" size={25} color="purple" />,
    },
  ]);

  return (
    <View className="flex-1 bg-white">
      <View className=" flex-row p-3 gap-3">
        <Image
          source={require("../assets/images/avatar-profile.jpg")}
          className="w-16 h-16 rounded-full"
        />
        <View className="flex-1 ">
          <Text className="text-xl font-bold">Babith Kullachetti</Text>
          <Text className="text-xs">
            Click on your profile to toggle between user and anonymous posting
          </Text>
        </View>
      </View>
      <View className=" flex-[0.1] justify-center px-3">
        <View className="rounded-2xl  w-44 h-14">
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select a pod"
          />
        </View>
      </View>
      <View className="p-5 my-2 rounded-md mx-3 bg-purple-100">
        <Text className="text-purple-900">
          Read Community Guidelines before posting!
        </Text>
      </View>
      <View className="flex-[0.85] ">
        <TextInput
          className="px-4 py-2 text-lg"
          placeholder="Enter your post here"
          multiline
          maxLength={1000}
        />
      </View>
      <View className="flex-[0.1]  border-t-[1px] border-purple-100  flex justify-center items-end px-5">
        <TouchableOpacity className="p-2 px-5 bg-slate-300 rounded-full ">
          <Text className="font-bold text-slate-400">Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
