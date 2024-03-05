import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  separatorView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginVertical: 30,
  },
  separatorViewLine: {
    height: 1,
    backgroundColor: Colors.light.gray,
    borderRadius: 10,
    flex: 1,
  },
  separatorViewText: {
    color: Colors.light.gray,
  },
  buttonContainer: {
    gap: 20,
  },
});
