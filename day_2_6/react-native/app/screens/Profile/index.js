import { View, ImageBackground, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import React from "react";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import { HEIGHT, WIDTH } from "../../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

export default function Profile() {
  const IMADEDATA = [
    {
      id: 1,
      Image: IMAGES.person3,
    },
    {
      id: 2,
      Image: IMAGES.person3,
    },
    {
      id: 3,
      Image: IMAGES.person3,
    },
  ];
  const logout = async () => {
    // Hapus token
    await AsyncStorage.removeItem("authToken");
    // Toast Berhasil
    Toast.show({
      type: "success",
      text1: "Kamu berhasil Logout",
      visibilityTime: 6000,
    });
    // Navigasikan pengguna ke halaman login
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ImageBackground
          source={IMAGES.bgProfile}
          style={{
            width: WIDTH,
            height: 495,
            alignItems: "center",
          }}
          resizeMode="cover"
        >
          <View
            style={{
              borderWidth: 2,
              borderColor: "#FBD2A5",
              width: 124,
              height: 124,
              borderRadius: 90,
              marginTop: 80,
            }}
          >
            <Image
              source={IMAGES.person}
              style={{
                width: 120,
                height: 120,
                borderRadius: 90,
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text fontSize={20} semiBold>
              Maulana Kavaldo
            </Text>
            <Text
              fontSize={14}
              color="#909090"
              style={{ textAlign: "center" }}
              semiBold
            >
              System Analyst
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{
            width: 343,
            height: 192,
            alignContent: "center",
            alignSelf: "center",
            marginTop: -190,
            marginHorizontal: 20,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text fontSize={14} color="#160520" semiBold>
              ID
            </Text>
            <Text fontSize={14} color="#A7A7A7" semiBold>
              A3050
            </Text>
          </View>
          <View
            style={{
              margin: 5,
              borderBottomWidth: 1,
              marginHorizontal: 20,
              borderColor: "#D3D3D3",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text fontSize={14} color="#160520" semiBold>
              Email
            </Text>
            <Text fontSize={14} color="#A7A7A7" semiBold>
              kowesopoto@gmail.com
            </Text>
          </View>
          <View
            style={{
              margin: 5,
              borderBottomWidth: 1,
              marginHorizontal: 20,
              borderColor: "#D3D3D3",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text fontSize={14} color="#160520" semiBold>
              Date of Birth
            </Text>
            <Text fontSize={14} color="#A7A7A7" semiBold>
              7 Mart 1999
            </Text>
          </View>
          <View
            style={{
              margin: 5,
              borderBottomWidth: 1,
              marginHorizontal: 16,
              borderColor: "#D3D3D3",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <Text fontSize={14} color="#160520" semiBold>
              Gender
            </Text>
            <Text fontSize={14} color="#A7A7A7" semiBold>
              Male
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 343,
            height: 72,
            alignContent: "center",
            alignSelf: "center",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 10,
            }}
          >
            <View>
              <Text fontSize={14} semiBold>
                Teams
              </Text>
              <Text fontSize={14} semiBold color="#A7A7A7">
                React Native
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Image
                source={IMAGES.person}
                style={{ width: 35, height: 35, borderRadius: 90 }}
              />
              <Image
                source={IMAGES.person2}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 90,
                  marginLeft: -15,
                }}
              />
              <Image
                source={IMAGES.person3}
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 90,
                  marginLeft: -15,
                }}
              />
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 90,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#C16262",
                  marginLeft: -15,
                }}
              >
                <Text fontSize={12} color="#fff">
                  +6
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 343,
            height: 186,
            alignContent: "center",
            alignSelf: "center",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 12,
            backgroundColor: "#fff",
            shadowColor: "#000000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.19,
            shadowRadius: 5.62,
            elevation: 6,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="guard">
                  <rect
                    id="Rectangle 2045"
                    width="24"
                    height="24"
                    rx="8"
                    fill="#CED1D4"
                  />
                  <path
                    id="Vector"
                    d="M19 11.1591V7.71017C19 7.06594 18.5129 6.3353 17.908 6.09176L13.532 4.30051C12.5499 3.89983 11.4422 3.89983 10.4601 4.30051L6.08418 6.09176C5.48709 6.3353 5 7.06594 5 7.71017V11.1591C5 15.0009 7.78901 18.5991 11.5993 19.6518C11.8586 19.7225 12.1414 19.7225 12.4007 19.6518C16.211 18.5991 19 15.0009 19 11.1591ZM12.5892 12.534V14.6002C12.5892 14.9223 12.3221 15.1894 12 15.1894C11.6779 15.1894 11.4108 14.9223 11.4108 14.6002V12.534C10.6173 12.2826 10.0359 11.5441 10.0359 10.672C10.0359 9.58784 10.9158 8.70792 12 8.70792C13.0842 8.70792 13.9641 9.58784 13.9641 10.672C13.9641 11.5519 13.3827 12.2826 12.5892 12.534Z"
                    fill="#335661"
                  />
                </g>
              </svg>
              <Text
                fontSize={12}
                color="#160520"
                bold
                style={{ marginLeft: 10 }}
              >
                Privacy and Security
              </Text>
            </View>
            <Image source={IMAGES.ic_detail} style={{ width: 5, height: 10 }} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginHorizontal: 16,
              borderColor: "#D3D3D3",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={IMAGES.ic_help}
                style={{ width: 24, height: 24, marginRight: 10 }}
              />
              <Text fontSize={12} color="#160520" bold>
                Help
              </Text>
            </View>
            <Image source={IMAGES.ic_detail} style={{ width: 5, height: 10 }} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginHorizontal: 16,
              borderColor: "#D3D3D3",
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 16,
              paddingVertical: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="about">
                  <rect
                    id="Rectangle 2045"
                    width="24"
                    height="24"
                    rx="8"
                    fill="#E6E2FF"
                  />
                  <path
                    id="Vector"
                    d="M12 5C8.143 5 5 8.143 5 12C5 15.857 8.143 19 12 19C15.857 19 19 15.857 19 12C19 8.143 15.857 5 12 5ZM11.475 9.2C11.475 8.913 11.713 8.675 12 8.675C12.287 8.675 12.525 8.913 12.525 9.2V12.7C12.525 12.987 12.287 13.225 12 13.225C11.713 13.225 11.475 12.987 11.475 12.7V9.2ZM12.644 15.066C12.609 15.157 12.56 15.227 12.497 15.297C12.427 15.36 12.35 15.409 12.266 15.444C12.182 15.479 12.091 15.5 12 15.5C11.909 15.5 11.818 15.479 11.734 15.444C11.65 15.409 11.573 15.36 11.503 15.297C11.44 15.227 11.391 15.157 11.356 15.066C11.321 14.982 11.3 14.891 11.3 14.8C11.3 14.709 11.321 14.618 11.356 14.534C11.391 14.45 11.44 14.373 11.503 14.303C11.573 14.24 11.65 14.191 11.734 14.156C11.902 14.086 12.098 14.086 12.266 14.156C12.35 14.191 12.427 14.24 12.497 14.303C12.56 14.373 12.609 14.45 12.644 14.534C12.679 14.618 12.7 14.709 12.7 14.8C12.7 14.891 12.679 14.982 12.644 15.066Z"
                    fill="#335661"
                  />
                </g>
              </svg>
              <Text
                fontSize={12}
                color="#160520"
                bold
                style={{ marginLeft: 10 }}
              >
                About Us
              </Text>
            </View>
            <Image source={IMAGES.ic_detail} style={{ width: 5, height: 10 }} />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              marginHorizontal: 16,
              borderColor: "#D3D3D3",
            }}
          />
          <TouchableOpacity onPress={logout}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 16,
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={IMAGES.ic_out}
                  style={{ width: 24, height: 24, marginRight: 10 }}
                />
                <Text fontSize={12} color="#160520" bold>
                  Logout
                </Text>
              </View>
              <Image
                source={IMAGES.ic_detail}
                style={{ width: 5, height: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Text
          bold
          fontSize={12}
          style={{ marginVertical: 20, paddingBottom: 50, textAlign: "center" }}
        >
          v0.0.1
        </Text>
      </View>
    </ScrollView>
  );
}
