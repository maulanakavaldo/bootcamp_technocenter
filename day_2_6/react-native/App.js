import React, { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";
import Text from "./app/components/Text";
import FONTS from "./app/assets/fonts";
import Router from "./app/services/routers";
import Toast from "react-native-toast-message";
import Main from "./app/screens/Main";
import Login from "./app/screens/Login";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(FONTS.Poppins);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError, ""]);

  useEffect(() => {
    const checkToken = async () => {
      const authToken = await AsyncStorage.getItem("authToken");
      if (authToken) {
        setIsUserLoggedIn(true);
      }
      // else{
      //   setIsUserLoggedIn(false);
      // }
    };

    const removeTokenOnStart = async () => {
      // Hapus token dari AsyncStorage saat aplikasi dimulai
      await AsyncStorage.removeItem('authToken');
    };

    checkToken();
    removeTokenOnStart();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        {isUserLoggedIn ? (
          <Main />
        ) : (
          <>
            <Router />
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </>
        )}
      </NavigationContainer>
    </View>
  );
}

// import React, { useCallback } from "react";
// import { View, StyleSheet } from "react-native";
// import { useFonts } from "expo-font";
// import { NavigationContainer } from "@react-navigation/native";
// import Text from "./app/components/Text";
// import FONTS from "./app/assets/fonts";
// import * as SplashScreen from "expo-splash-screen";
// import Profile from "./app/screens/Profile";
// import Router from "./app/services/routers";
// import Toast from "react-native-toast-message";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// SplashScreen.preventAutoHideAsync();

// export default function App() {
//   const [fontsLoaded, fontError] = useFonts(FONTS.Poppins);

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded || fontError) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded, fontError]);

//   if (!fontsLoaded && !fontError) {
//     return null;
//   }

//   return (
//     <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
//       <NavigationContainer>
//         <Router />
//         <Toast ref={(ref) => Toast.setRef(ref)} />
//       </NavigationContainer>
//     </View>
//   );
// }
