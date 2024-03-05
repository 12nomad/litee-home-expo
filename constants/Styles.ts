import { StyleSheet } from "react-native";

import Colors from "./Colors";

const Styles = StyleSheet.create({
  textInput: {
    fontFamily: "Lato",
    borderRadius: 10,
    borderColor: Colors.light["gray-tint"],
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: Colors.light.background,
    letterSpacing: 0.5,
  },
  textBold: {
    fontFamily: "LatoBold",
  },
  textFade: {
    opacity: 0.8,
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
  separator: {
    height: 1,
    width: "100%",
    opacity: 0.2,
    backgroundColor: "#000",
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 100,
    objectFit: "cover",
    backgroundColor: Colors.light["gray-tint"],
  },
  score: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  textMd: {
    fontSize: 16,
  },
  roundButton: {
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  safeAreaView: {
    backgroundColor: "#fff",
  },
});

export default Styles;
