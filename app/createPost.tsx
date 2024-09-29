import { View, Text, Image } from 'react-native'
import React from 'react'

export default function createPost() {
  return (
    <View className='flex-1 bg-white'>
      <View className=' flex-row p-3 gap-3'>
      <Image
          source={require("../assets/images/avatar-profile.jpg")}
          className="w-16 h-16 rounded-full"
        />
        <View className='flex-1 '>
            <Text className='text-xl font-bold'>Babith Kullachetti</Text>
            <Text className='text-xs'>Click on your profile to toggle between user and anonymous posting</Text>
        </View>
      </View>
    </View>
  )
}