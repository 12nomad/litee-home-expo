import { Text, View } from "@/components/Themed";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import Animated, { SlideInDown } from "react-native-reanimated";

import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";
import useHouseDetail from "@/hooks/useHouseDetail";
import { plural } from "@/utils/plural.util";
import { useLayoutEffect } from "react";
import { housesIdStyles } from "@/styles/housesId.style";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 240;
const styles = housesIdStyles(width, IMG_HEIGHT);

const HouseDetail = () => {
  const {
    headerAnimatedStyle,
    imageAnimatedStyle,
    navigation,
    onLikePress,
    router,
    house,
    onSharePress,
    scrollAnimatedRef,
  } = useHouseDetail(IMG_HEIGHT);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackground: () => (
        <Animated.View style={[styles.header, headerAnimatedStyle]} />
      ),
      headerRight: () => (
        <View style={[Styles.row, { gap: 10 }]}>
          <TouchableOpacity style={Styles.roundButton} onPress={onSharePress}>
            <Feather name="share" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={Styles.roundButton} onPress={onLikePress}>
            <Feather name="heart" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={Styles.roundButton}
          onPress={() => router.back()}
        >
          <Feather name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={styles.container}>
        <Animated.ScrollView ref={scrollAnimatedRef} scrollEventThrottle={10}>
          <Animated.Image
            source={{ uri: house?.xl_picture_url }}
            style={[styles.image, imageAnimatedStyle]}
          />

          <View style={styles.details}>
            <Text style={styles.name}>{house?.name}</Text>
            <View style={styles.subDetails}>
              <Text style={Styles.textBold}>{house?.host_location}</Text>
              <View style={Styles.row}>
                <Text style={Styles.textFade}>
                  {house?.bedrooms} {plural(house?.bedrooms || 0, "bedroom")}
                </Text>
                <Text style={Styles.textFade}>·</Text>
                <Text style={Styles.textFade}>
                  {house?.beds} {plural(house?.beds || 0, "bed")}
                </Text>
                <Text style={Styles.textFade}>·</Text>
                <Text style={Styles.textFade}>
                  {house?.bathrooms} {plural(house?.bathrooms || 0, "bath")}
                </Text>
              </View>
              <View style={styles.review}>
                <View style={[Styles.score]}>
                  <Ionicons name="star" />
                  <Text>
                    {house?.review_scores_value
                      ? house?.review_scores_value / 2
                      : 0}
                  </Text>
                </View>
                <Text>·</Text>
                <Text>
                  {house?.number_of_reviews || 0}{" "}
                  {plural(house?.number_of_reviews || 0, "review")}
                </Text>
              </View>
            </View>
            <View style={Styles.separator}></View>
            <View style={[Styles.row, { gap: 10 }]}>
              <Image
                source={{ uri: house?.host_picture_url }}
                style={Styles.avatar}
              />

              <View style={styles.subDetails}>
                <Text style={Styles.textBold}>
                  Hosted by {house?.host_name}
                </Text>
                <Text style={Styles.textFade}>since {house?.host_since}</Text>
              </View>
            </View>
            <View style={Styles.separator}></View>
            <Text style={styles.description}>{house?.description}</Text>
          </View>
        </Animated.ScrollView>

        <Animated.View
          style={[Styles.row, styles.footer]}
          entering={SlideInDown.delay(100)}
        >
          <Text style={Styles.textMd}>
            <Text style={[Styles.textBold, Styles.textMd]}>
              ${house?.price}
            </Text>{" "}
            nigth
          </Text>
          <TouchableOpacity
            style={[Styles.button, { backgroundColor: Colors.light.primary }]}
          >
            <Text style={Styles.buttonText}>Reserve</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default HouseDetail;
