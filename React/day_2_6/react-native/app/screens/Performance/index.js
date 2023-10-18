import { View, Image, ScrollView } from "react-native";
import IMAGES from "../../assets/images";
import React from "react";
import Text from "../../components/Text";

export default function Performance() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text bold fontSize={30}>
          {" "}
          Productivity{" "}
        </Text>
        <Image
          source={IMAGES.graph}
          style={{ width: 343, height: 207 }}
          resizeMode="contain"
        ></Image>
        <Text bold fontSize={30}>
          {" "}
          Recent Projects{" "}
        </Text>

        <View
          style={{
            flexDirection: "row",
            // borderWidth:1,a
            width: 343,
            height: 64,
            backgroundColor: "#F8F3FF",
            borderRadius: 12,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Image
              source={IMAGES.setir_kanan}
              style={{ width: 40, height: 40 }}
              resizeMode="contain"
            ></Image>
          </View>

          <View
            style={{
              marginLeft: 10,
            }}
          >
            <Text>Registration - New Features</Text>
            <Text fontSize={14} color="#909090">
              Next JS WEB
            </Text>
          </View>

          <View
            style={{
              marginLeft: 50,
              alignItems: "right",
            }}
          >
            <Image
              source={IMAGES.ic_arrowDown}
              style={{ width: 16, height: 7 }}
              resizeMode="contain"
            ></Image>
          </View>
        </View>

        {/* // */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            // borderWidth:1,a
            width: 343,
            height: 162,
            backgroundColor: "#F8F3FF",
            borderRadius: 12,
            alignContent: "center",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              width: 343,
              height: 162,
              backgroundColor: "#F8F3FF",
              borderRadius: 12,
              alignContent: "center",
              // alignItems: "center",
            }}
          >
            <View>
              <Image
                source={IMAGES.setir_kanan}
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
              ></Image>
            </View>

            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text>Registration - New Features</Text>
              <Text fontSize={14} color="#909090">
                Next JS WEB
              </Text>
            </View>

            <View
              style={{
                marginLeft: 50,
                alignItems: "right",
                alignItems: "center",
              }}
            >
              <Image
                source={IMAGES.ic_arrowUp}
                style={{ width: 16, height: 7 }}
                resizeMode="contain"
              ></Image>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
