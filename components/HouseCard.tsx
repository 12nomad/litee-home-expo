import { House } from "@/types/house";
import { Link } from "expo-router";
import {
  Image,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "./Themed";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import Styles from "@/constants/Styles";

interface HouseCardProps {
  house: ListRenderItemInfo<House>;
}

const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <Link href={`/houses/${house.item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.container}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Image source={{ uri: house.item.medium_url }} style={styles.image} />
          <Ionicons name="heart-outline" style={styles.heart} size={24} />

          <View style={styles.details}>
            <View style={styles.title}>
              <Text style={Styles.textBold}>{house.item.name}</Text>
              {house.item.review_scores_value > 0 && (
                <View style={Styles.score}>
                  <Ionicons name="star" />
                  <Text style={Styles.textBold}>
                    {house.item.review_scores_value / 2}
                  </Text>
                </View>
              )}
            </View>
            <Text style={Styles.textFade}>{house.item.room_type}</Text>
            <Text style={Styles.textFade}>{house.item.host_location}</Text>
            <View style={[styles.title, { paddingBottom: 20 }]}>
              <Text style={styles.price}>
                <Text style={Styles.textBold}>${house.item.price}</Text> nigth
              </Text>
              <View style={Styles.score}>
                <Text style={Styles.textFade}>see details</Text>
                <Feather name="arrow-right" />
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 10,
  },
  heart: {
    position: "absolute",
    top: 9,
    right: 12,
    color: "#fff",
  },
  details: {
    marginTop: 10,
    gap: 5,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    marginTop: 5,
  },
});

export default HouseCard;
