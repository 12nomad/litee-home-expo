import { Text, View } from "./Themed";
import { Pressable, StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Strategy } from "@/enums/strategy.enum";

interface BrandButtonProps {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
  strategy: Strategy;
  onSelectAuth: (strategy: Strategy) => void;
}

const BrandButton = ({
  icon,
  title,
  onSelectAuth,
  strategy,
}: BrandButtonProps) => {
  return (
    <Pressable onPress={() => onSelectAuth(strategy)}>
      <View style={Styles.button}>
        <Text style={Styles.buttonText}>{title}</Text>
        <FontAwesome name={icon} size={18} style={Styles.icon} />
      </View>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  button: {
    position: "relative",
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  icon: {
    position: "absolute",
    left: 14,
    top: 14,
  },
});

export default BrandButton;
