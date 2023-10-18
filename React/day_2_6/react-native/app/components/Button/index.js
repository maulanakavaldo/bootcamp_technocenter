import { TouchableOpacity, ActivityIndicator } from "react-native";
import Text from "../Text";
import React from "react";

export default function Button({ title, disabled, loading, ...props }) {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      activeOpacity={0.5}
      style={{
        marginTop: 20,
        marginBottom: 50,
        padding: 12,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#18DCFF",
        opacity: disabled || loading ? 0.5 : 1,
      }}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color="#261A31" />
      ) : (
        <Text color="#261A31" semiBold>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
