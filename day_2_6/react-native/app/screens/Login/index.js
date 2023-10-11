import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import IMAGES from "../../assets/images";
import Text from "../../components/Text";
import { HEIGHT, WIDTH } from "../../assets/styles";
import { EMAIL } from "../../utils/validator";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import satellite from "../../services/satellite";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ route, navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [dataError, setDataError] = useState({
    email: "",
    password: "",
  });

  // akan dijalankan pertama kali ketika page atau komponen dimuat
  useEffect(() => {
    console.log("Data Error Use State: ", dataLogin);
    const isError = !dataError.email && !dataError.password;
    const isFilled = dataLogin.email && dataLogin.password;

    if (isError && isFilled) {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
    // dijalankan ketika data error berubah
  }, [dataLogin, dataError]);

  const formHandler = (text, type) => {
    setDataLogin({
      ...dataLogin,
      [type]: text,
    });

    if (text === "") {
      setDataError({
        ...dataError,
        [type]: `${type} must be filled in`,
      });

      return;
    }

    if (type === "email" && !EMAIL.test(text)) {
      setDataError({
        ...dataError,
        email: "invalid email address",
      });

      return;
    }

    setDataError({
      ...dataError,
      [type]: "",
    });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await satellite.post("rest/v1/auth/login", dataLogin);
      // console.log("SUCCESS", JSON.stringify(response, null, 2));
      // Simpan informasi login di AsyncStorage
      await AsyncStorage.setItem("authToken", JSON.stringify(response.data));
      Toast.show({
        type: "success",
        text1: "Login Successful",
        visibilityTime: 3000,
        autoHide: true,
      });
      navigation.navigate("Main");
    } catch (error) {
      // console.log(JSON.stringify(error, null, 2));
      if (error.response.status === 400) {
        setDataError({
          password: "invalid email or password",
        });
        Toast.show({
          type: "error",
          text1: "Invalid email or password",
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={IMAGES.bgScreen}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <InputText
          title="Email"
          placeholder="Enter Your Email"
          keyboardType={"email-address"}
          autoCapitalize="none"
          onChangeText={(text) => formHandler(text, "email")}
          dataError={dataError.email}
        />
        <InputText
          title="Password"
          placeholder="Password"
          onChangeText={(text) => formHandler(text, "password")}
          dataError={dataError.password}
          style={{ marginTop: 27 }}
          autoCapitalize="none"
          secureTextEntry={!showPassword}
          rightIcon={
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? IMAGES.ic_eye_slash : IMAGES.ic_eye}
                style={{ width: 24, height: 24 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          }
        />
        <View style={{ marginTop: 5, marginHorizontal: 14 }}>
          <Text fontSize={10} color="#F6E58D">
            {" "}
            Forgot Password ?{" "}
          </Text>
        </View>
        <Button
          title={"Login"}
          disabled={isEnable}
          onPress={onSubmit}
          loading={isLoading}
        />
        <View style={styles.signUpButton}>
          <Text color="#FFF" fontSize={14}>
            Don't Have An Account?
          </Text>
          <Text
            fontSize={14}
            color="#F6E58D"
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  signUpButton: {
    display: "flex",
    flexDirection: "row",
    columnGap: 5,
    justifyContent: "center",
    marginTop: 20,
  },
  imageBackground: {
    width: WIDTH,
    height: HEIGHT + 32,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    paddingTop: 70,
  },
});

