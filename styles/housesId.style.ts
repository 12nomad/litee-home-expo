import { StyleSheet } from "react-native";

export const housesIdStyles = (screenWidth: number, imgHeight: number) =>
  StyleSheet.create({
    container: {
      height: "100%",
      position: "relative",
      paddingBottom: 70,
    },
    image: {
      width: screenWidth,
      height: imgHeight,
    },
    details: {
      padding: 20,
      gap: 20,
    },
    subDetails: {
      gap: 5,
    },
    name: {
      fontFamily: "LatoBold",
      fontSize: 20,
    },
    review: {
      flexDirection: "row",
      gap: 5,
    },
    description: {
      lineHeight: 25,
    },
    footer: {
      position: "absolute",
      bottom: 0,
      right: 0,
      height: 70,
      width: screenWidth,
      paddingHorizontal: 20,
      textAlign: "center",
      borderTopWidth: StyleSheet.hairlineWidth,
      justifyContent: "space-between",
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "#fff",
      height: 200,
      borderBottomColor: "#000",
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
