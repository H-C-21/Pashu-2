import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import HomeCard from "../../components/home/homecard/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES } from "../../constants";


export default function AnimalInfo() {

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
        {/* <Text >Animal Info</Text> */}
        <View style={styles.container} className = "mt-6 grid-cols-2">
        <Link href="animal_info/chickens">
            <View className="rounded-md">
             <HomeCard image={require('../../assets/images/chicken.png')} title = {"Chickens"}/>
            </View>
        </Link>

        
        <Link href="/animalinfo/goat">
            <View className="rounded-md">
             <HomeCard image={require('../../assets/images/goat.png')} title = {"Goats"}/>
            </View>
        </Link>

        </View>
        </View>
    </ScrollView>
    </SafeAreaView>
);
}

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
  });