import { Redirect } from "expo-router";
import { SafeAreaView, ScrollView, View } from "react-native";
import AnimalCard from "../../../components/animals/Animalcard";
import { COLORS, SIZES } from "../../../constants";

export default function ChickenInfo() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >

          <View className = "flex flex-col w-[100%]">
           <AnimalCard number={1} purpose={"Eggs"} origin={"India"} description={"The chickens are of the desi breed and are free range. They are fed with organic feed and are vaccinated regularly."} date={"12 March 2023"}/>
          </View>

        </View>
        </ScrollView>
        </SafeAreaView>
  )
}