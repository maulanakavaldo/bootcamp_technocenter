// import Text from "../../components/Text";
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import IMAGES from "../../assets/images";
import { HEIGHT, WIDTH } from "../../assets/styles";
import { EMAIL, NIK, PASSWORD, PHONE } from "../../utils/validator";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import satellite from "../../services/satellite";
import Toast from "react-native-toast-message";

export default function Register({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isEnable, setIsEnable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    nik: "",
    password: "",
    confirmPass: "",
  });
  const [dataError, setDataError] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    nik: "",
    password: "",
    confirmPass: "",
  });

  useEffect(() => {
    console.log("DATA ERROR USEEFFECT", dataRegister);
    console.log("DATA ERROR USESTATE", dataRegister);
    const isError =
      !dataError.name &&
      !dataError.email &&
      !dataError.phoneNumber &&
      !dataError.nik &&
      !dataError.password &&
      !dataError.confirmPass;
    const isFilled =
      dataRegister.name &&
      dataRegister.email &&
      dataRegister.phoneNumber &&
      dataRegister.nik &&
      dataRegister.password &&
      dataRegister.confirmPass;
    if (
      isError &&
      isFilled &&
      dataRegister.password === dataRegister.confirmPass
    ) {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
    // run ketika dataError dan dataLogin berubah
  }, [dataRegister, dataError]);

  const formHandler = (text, type) => {
    setDataRegister({
      ...dataRegister,
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
        email: "Invalid email address",
      });

      return;
    }
    if (type === "nik" && !NIK.test(text)) {
      setDataError({
        ...dataError,
        nik: "NIK have 16 digits and only number",
      });
      return;
    }

    if (type === "phoneNumber" && !PHONE.test(text)) {
      setDataError({
        ...dataError,
        phoneNumber: "Phone number must start with 62",
      });

      return;
    }
    if (type === "password" && !PASSWORD.test(text)) {
      setDataError({
        ...dataError,
        password: "At least 8 char (letter, number, and special character)",
      });

      return;
    }
    if (type === "confirmPass" && text !== dataRegister.password) {
      setDataError({
        ...dataError,
        confirmPass: "Passwords do not match",
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
      const requestData = {
        name: dataRegister.name,
        email: dataRegister.email,
        phoneNumber: dataRegister.phoneNumber,
        nik: dataRegister.nik,
        password: dataRegister.password,
      };

      const response = await satellite.post("rest/v1/auth/register", {
        doSendRegister: requestData,
      });
      console.log("SUCCESS", JSON.stringify(response, null, 2));
      // Toast Berhasil
      Toast.show({
        type: "success",
        text1: "Registrasi Berhasil. Silakan login!",
        visibilityTime: 6000,
      });
      // Reset form
      setDataRegister({
        name: "",
        email: "",
        phoneNumber: "",
        nik: "",
        password: "",
        confirmPass: "",
      });
      navigation.navigate("Login");
    } catch (error) {
      console.log("GAGAL", JSON.stringify(error, null, 2));
      // Toast Gagal
      Toast.show({
        type: "error",
        text1: "Registrasi Gagal",
        text2: "Sepertinya email sudah digunakan",
        visibilityTime: 6000,
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <ImageBackground
      source={IMAGES.bgScreen}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <ScrollView>
        <View style={styles.container}>
          {/* Back Icon */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              width: 60,
              height: 60,
            }}
          >
            <Image
              source={IMAGES.ic_arrow}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
          </TouchableOpacity>
          {/* Name */}
          <InputText
            title="Name"
            placeholder="Enter Your Name"
            onChangeText={(text) => formHandler(text, "name")}
            dataError={dataError.name}
          />
          {/* Email */}
          <InputText
            title="Email"
            placeholder="Enter Your Email"
            keyboardType={"email-address"}
            autoCapitalize="none"
            onChangeText={(text) => formHandler(text, "email")}
            dataError={dataError.email}
            style={{ marginTop: 20 }}
          />
          {/* Phone Number */}
          <InputText
            title="Phone"
            placeholder="Enter Your Phone"
            keyboardType="phone-pad"
            onChangeText={(text) => formHandler(text, "phoneNumber")}
            dataError={dataError.phoneNumber}
            style={{ marginTop: 20 }}
          />
          {/* NIK */}
          <InputText
            title="NIK"
            placeholder="Enter Your NIK Number"
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={(text) => formHandler(text, "nik")}
            dataError={dataError.nik}
            style={{ marginTop: 20 }}
          />
          {/* Password */}
          <InputText
            title="Password"
            placeholder="Password"
            onChangeText={(text) => formHandler(text, "password")}
            dataError={dataError.password}
            style={{ marginTop: 20 }}
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
          {/* Confirmation Password */}
          <InputText
            title="Confirm Password"
            placeholder="Confirm Password"
            onChangeText={(text) => formHandler(text, "confirmPass")}
            dataError={dataError.confirmPass}
            style={{ marginTop: 20 }}
            autoCapitalize="none"
            secureTextEntry={!showConfirmPassword}
            rightIcon={
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <Image
                  source={
                    showConfirmPassword ? IMAGES.ic_eye_slash : IMAGES.ic_eye
                  }
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            }
          />
          {/* Submit */}
          <Button
            title={"Register"}
            disabled={isEnable}
            onPress={onSubmit}
            loading={isLoading}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: WIDTH,
    height: HEIGHT,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 100,
  },
});
