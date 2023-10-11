import { View, TouchableOpacity } from "react-native";
import React from "react";
import Text from "../../components/Text";

export default function CreateTask() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> Create Task Page </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
}
