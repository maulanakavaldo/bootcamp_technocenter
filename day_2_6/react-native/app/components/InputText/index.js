import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import Text from "../Text";

export default function InputText({
  title = "",
  dataError = "",
  styleInput = {},
  style = {},
  rightIcon = <View />,
  ...props
}) {
  return (
    <View>
      <Text style={style} color="#FFF" fontSize={16}>
        {title}
      </Text>
      <View
        style={[
          styles.textInput,
          { borderColor: dataError ? "#EA8685" : "#132040" },
        ]}
      >
        <TextInput
          placeholderTextColor={"#FFF"}
          style={[styles.textInputProps, styleInput]}
          {...props}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>
      {dataError && (
        <Text color="#EA8685" style={styles.errorMessage} fontSize={10}>
          {dataError}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#273C75",
    marginTop: 8,
    padding: 12,
    flexDirection: "row",
  },
  textInputProps: {
    color: "#FFF",
    fontFamily: "poppinsRegular",
    fontSize: 16,
    flex: 1,
  },
  errorMessage: {
    marginTop: 5,
    textAlign: "right",
    marginRight: 5,
  },
});
