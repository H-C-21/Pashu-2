import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { COLORS, icons, images } from "../constants";
import { ScreenHeaderBtn } from "../components";

// import {Drawer, GestureHandlerRootView} from "";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "home",
};

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack initialRouteName="login" screenOptions={{
      headerStyle: { backgroundColor: COLORS.tertiary },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' className="mr-4" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={require('../assets/images/mainicon-transparent.jpg')} dimension='100%' />
          ),
      headerTitle: "Pashu Palan",
    }}>
      <Stack.Screen options={{ headerShown: false }} name="login/index" />
      <Stack.Screen name="register/index" options={{ headerShown: false }} />
      <Stack.Screen name ="homepage/index"/>
      <Stack.Screen name="health/index" />
      <Stack.Screen name="animal_info/index" />
      
    </Stack>
  )
};

export default Layout;
