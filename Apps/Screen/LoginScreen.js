import { View, Text, Image } from "react-native";
import React from "react";
import { firstaid, medical_sign } from "../../assets/images";

export default function LoginScreen() {
  return (
    <View className="w-full flex flex-row justify-center items-center bg-green-500 h-full">
      <Image
        source={firstaid}
        style={{ width: 150, height: 150, objectFit: "contain" }}
      />
    </View>
  );
}
