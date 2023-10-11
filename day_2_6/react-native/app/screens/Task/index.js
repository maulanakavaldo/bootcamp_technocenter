import { StyleSheet ,View, Image, ScrollView } from "react-native";
import React from "react";
import Text from "../../components/Text";
import IMAGES from "../../assets/images";

export default function Task() {
  return (
    <ScrollView>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.timeSheet}>Time Sheet</Text>

      {/* Card 1 */}
      <View
        style={{
          // flexDirection: "row",
          margin: 15,
          borderWidth: 1,
          borderRadius: 8,
          height:225,
          width:343,
          borderColor: "#A7A7A7",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={IMAGES.ic_task_t}
            style={{ width: 28, height: 28 }}
            resizeMode="contain"
          ></Image>
          <Text
            bold
            fontSize={18}
            style={{
              marginLeft: 20,
            }}
          >
            Develop New Features Mutual Fund Moxa Konven
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 8,
          }}
        >
          <Image
            source={IMAGES.ic_flag}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          ></Image>
          <Text
            fontSize={11}
            style={{
              marginLeft: 20,
            }}
          >
            April 04, 2023
          </Text>
        </View>
        <Text fontSize={11}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            borderColor: "blue",
          }}
        >
          <Text
            fontSize={10}
            style={{
              borderRadius: 8,
              width: 56,
              height: 21,
              paddingVertical: 5,
              backgroundColor: "#70A1FF",
              color: "#fff",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Present
          </Text>

          <Text
            fontSize={10}
            style={{
              borderRadius: 8,
              width: 86,
              height: 21,
              marginLeft: 10,
              paddingVertical: 5,
              backgroundColor: "#CED1D4",
              color: "#fff",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            08:00 - 17: 00
          </Text>
        </View>
      </View>

      {/* Card 2 */}

      <View
        style={{
          // flexDirection: "row",
          margin: 15,
          borderWidth: 1,
          borderRadius: 8,
          height:187,
          width:343,
          borderColor: "#A7A7A7",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={IMAGES.ic_task_t}
            style={{ width: 28, height: 28 }}
            resizeMode="contain"
          ></Image>
          <Text
            bold
            fontSize={18}
            style={{
              marginLeft: 20,
            }}
          >
            Fixing Issue Mobile
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Image
            source={IMAGES.ic_flag}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          ></Image>
          <Text
            fontSize={11}
            style={{
              marginLeft: 20,
            }}
          >
            April 03, 2023
          </Text>
        </View>
        <Text fontSize={11}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <View
          style={{
            marginTop: 18,
            flexDirection: "row",
            borderColor: "blue",
          }}
        >
          <Text
            fontSize={10}
            style={{
              borderRadius: 8,
              width: 56,
              height: 21,
              paddingVertical: 5,
              backgroundColor: "#70A1FF",
              color: "#fff",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Present
          </Text>

          <Text
            fontSize={10}
            style={{
              borderRadius: 8,
              width: 86,
              height: 21,
              marginLeft: 10,
              paddingVertical: 5,
              backgroundColor: "#CED1D4",
              color: "#fff",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            08:00 - 17: 00
          </Text>
        </View>
      </View>

      {/* Card 3 */}
      <View
        style={{
          // flexDirection: "row",
          margin: 15,
          borderWidth: 1,
          borderRadius: 8,
          height:128,
          width:343,
          borderColor: "#A7A7A7",
          padding: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={IMAGES.ic_task_t}
            style={{ width: 28, height: 28 }}
            resizeMode="contain"
          ></Image>
          <Text
            bold
            fontSize={18}
            style={{
              marginLeft: 20,
            }}
          >
            Fixing Issue Mobile
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <Image
            source={IMAGES.ic_flag}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          ></Image>
          <Text
            fontSize={11}
            style={{
              marginLeft: 20,
            }}
          >
            April 02, 2023
          </Text>
        </View>

        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            borderColor: "blue",
          }}
        >
          <Text
            fontSize={10}
            style={{
              borderRadius: 8,
              width: 56,
              height: 21,
              paddingVertical: 5,
              backgroundColor: "#FDE180",
              color: "#fff",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Leave
          </Text>

        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  timeSheet: {
    top: 48,
    fontSize: 30,
    color: "#160520",
    alignContent: "left",
    alignItems: "left",
    justifyContent: "left",
    fontWeight: "700",
    marginBottom: 50,
    // position: "absolute",
  },
});

