import { Text as TextView } from 'react-native'
import React from 'react'

export default function Text({ 
  fontSize = 14, 
  color = "#160520", 
  children, 
  regular = true,
  black = false,
  semiBold = false,
  style,
  ...props
}) {
  return (
    <TextView 
      {...props} 
      style={[
        {
          fontSize: fontSize, 
          color: color 
        },
        regular && { fontFamily: "poppinsRegular" }, // versi singkat
        semiBold && { fontFamily: "poppinsSemiBold" }, // versi singkat
        black ? { fontFamily: "poppinsBlack" } : null, // versi normal
        style,
      ]}
    >
      { children }
    </TextView>
  );
}