import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

export const exploreHeaderStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.light["gray-tint"],
  },
  search: {
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textMedium: {
    fontFamily: "LatoBold",
  },
  textThin: {
    opacity: 0.6,
    marginTop: 5,
  },
  category: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingBottom: 10,
  },
});
