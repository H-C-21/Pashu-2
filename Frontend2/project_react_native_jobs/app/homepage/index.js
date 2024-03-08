import { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../../components";
import HomeCard from "../../components/home/homecard/HomeCard";

const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {/* <Stack.Screen
        
        options={{
          // headerShown: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
          ),
          headerTitle: "Pashu Palan",
        }}
      /> */}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />
          <View style={styles.container} className = "mt-6 grid-cols-2">
            
            <Link href="/animal_info">
            <View className="rounded-md">
             {/* <Pressable onPress={() => router.push('/search/Goats')}> */}
             <HomeCard image = {require('../../assets/images/goat_hen.png')} title={"Animal Managment"}/>
             </View>
             </Link>
            
             <View className="rounded-md">
             <HomeCard image={require('../../assets/images/egg_milk.png')} title = {"Egg & Milk"}/>
            </View>
            
            <Link href="/health">
            <View className="rounded-md">
             <HomeCard image={require('../../assets/images/health.png')} title = {"Health Checkup"}/>
            </View>
            </Link>
            
            <View className="rounded-md">
             <HomeCard image={require('../../assets/images/goat_eat.png')} title = {"Feeding"}/>
            </View>

            <View className="rounded-md">
             {/* <Pressable onPress={() => router.push('/search/Goats')}> */}
             <HomeCard image = {require('../../assets/images/money.png')} title={"Transactions"}/>
             </View>

           
            
            
            <View className="rounded-md">
             <HomeCard image={require('../../assets/images/report.png')} title = {"Reports"}/>
            </View>

          </View>

          {/* <Popularjobs /> */}
          {/* <Nearbyjobs /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 2,
    // alignItems: "center",
    // justifyContent: "center",
  },
  container: {
    marginTop: 2,
    backgroundColor: "#fff",
    width: '100vw',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust as needed
  },

  gridContainer: {
    flexDirection: 'row',
  },
})
export default Home;
