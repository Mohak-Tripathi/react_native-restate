import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from "../constants/images"
import icons from "../constants/icons"
import { login } from '@/lib/appwrite'

const SignIn = () => {

  // const handleLogin = () => {
  //   console.log("login")
  // }


  const handleLogin = async () => {
    const result = await login();
    if (result) {
      // refetch();
    } else {
      Alert.alert("Error", "Failed to login");
    }
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        {/* border-2 border-blue-100 */}
        <Image source={images.onboarding} className='w-full h-4/6 ' resizeMode='contain' />

        {/* border-2 border-red-500 */}
        <View className="px-10  ">
          <Text className="text-base text-center  uppercase font-rubik text-black-200">
            Welcome To Zoomla
          </Text>

          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer To {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg font-rubik text-secondary-200  mt-12 text-center">
            Login to Zoomla with Google
          </Text>

          <TouchableOpacity onPress={handleLogin} className='shadow-md w-full bg-white py-5  shadow-zinc-300 mt-5 rounded-full'>
            <View className='flex flex-row justify-center items-center gap-x-2'>
              <Image source={icons.google} className='w-6 h-6' resizeMode='contain' />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Sign Up with Google</Text>
            </View>


          </TouchableOpacity>
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn




// import { Client, Account, ID } from 'react-native-appwrite';

// const client = new Client()
//   .setProject('67ea72920032fa67eb76')
//   .setPlatform('com.mohak_tripathi.zoomla');
