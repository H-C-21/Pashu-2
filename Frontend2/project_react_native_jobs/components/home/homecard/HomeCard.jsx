import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from "react-native";
import { COLORS } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const HomeCard = ({title,image}) => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React Native developer",
    num_pages: "1",
  });

  return (
    <View className = "w-auto shadow-md shadow-black rounded-md min-h-[28vh] ">
        <View className="mt-6 flex flex-col p-4">

            <Image source={image} style={{width: 145, height: 130, marginBottom: 24, padding:2}}/>
            <Text className="font-bold text-center" style={{color: COLORS.tertiary}}>{title}</Text>
          </View>
    </View>
  );
};

export default HomeCard;
