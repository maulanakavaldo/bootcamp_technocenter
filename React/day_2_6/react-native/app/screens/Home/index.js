import { View, Image, TextInput, TouchableOpacity, Button } from "react-native";
import { React, useState } from "react";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native-web";
import { HEIGHT, WIDTH } from "../../assets/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation, route }) {
  const [strings, setString] = useState("Ini Param Main");
  const logout = async () => {
    // Hapus token dari AsyncStorage
    await AsyncStorage.removeItem('authToken');
    // Navigasikan pengguna ke halaman login
    navigation.navigate("Login");
  };
  
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            // justifyContent: "center",
            alignItems: "center",
            marginTop: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              source={IMAGES.ic_task_t}
              style={{ width: 52, height: 52 }}
              resizeMode="contain"
            ></Image>

            <View
              style={{
                padding: 18,
                marginLeft: 25,
                // borderWidth: 1,
                borderRadius: 18,
                alignItems: "center",
                alignContent: "center",
                flexDirection: "row",
                width: 275,
                height: 52,
              }}
            >
              <Image
                source={IMAGES.ic_search}
                style={{ width: 17, height: 17, alignItems: "flex-start" }}
                resizeMode="contain"
              ></Image>

              <TextInput
                style={{
                  marginLeft: 18,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  // borderWidth: 1,
                  borderRadius: 20,
                  borderColor: "##FBFBFB",
                  fontSize: 16,
                  color: "#A7A7A7",
                }}
                placeholder="Find your project"
                placeholderTextColor="#A7A7A7"
                fontSize={16}
                // onChangeText={(text) => setSearchText(text)}
                // value={searchText}
              />

              {/* <TextInput
              fontSize={16}
              style={{
                marginLeft: 18,
                alignItems: "flex-end",
                color: "#A7A7A7",
                placeholder: "Find your project",
              }}
            ></TextInput> */}
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                semiBold
                fontSize={30}
                style={
                  {
                    // alignItems: "flex-start",
                  }
                }
              >
                Project
              </Text>
            </View>
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                borderRadius: 20,
                paddingVertical: 7,
                marginLeft: 120,
                paddingHorizontal: 10,
                borderColor: "#A7A7A7",
              }}
            >
              <Text fontSize={16} color="black">
                + Add
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text color="#A7A7A7" style={{ alignItems: "left" }}>
            You have 6 projects
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          <Image
            source={IMAGES.card_berijalan}
            style={{ width: 215, height: 295, alignItems: "flex-start" }}
            resizeMode="contain"
          ></Image>

          <Image
            source={IMAGES.card_setirkanan}
            style={{
              width: 215,
              height: 295,
              alignItems: "flex-start",
              marginLeft: 8,
            }}
            resizeMode="contain"
          ></Image>
        </View>

        {/* TIME MANAGEMENT */}
        <View
          style={
            {
              // marginLeft: 10,
            }
          }
        >
          <Text semiBold fontSize={30}>
            Time Management
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text fontSize={14} style={{}}>
            Sprint 5
          </Text>
          <Text fontSize={14} style={{ marginLeft: 30 }}>
            Sprint 6
          </Text>
          <Text semiBold fontSize={14} style={{ marginLeft: 30 }}>
            Sprint 7
          </Text>
        </View>
        {/* <Button title={"Logout"} onPress={logout} /> */}
      </View>
    </ScrollView>
  );
}
