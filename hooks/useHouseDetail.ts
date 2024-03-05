import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import data from "../assets/data/airbnb-listings-min.json";
import { Share } from "react-native";
import { useLayoutEffect } from "react";

const useHouseDetail = (imgHeight: number) => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const router = useRouter();
  const scrollAnimatedRef = useAnimatedRef<Animated.ScrollView>();

  const house = data.find((el) => el.id === id);

  const onSharePress = async () => {
    try {
      await Share.share({
        title: house?.name || "",
        url: house?.listing_url || "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onLikePress = () => {};

  const scrollOffset = useScrollViewOffset(scrollAnimatedRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-imgHeight, 0, imgHeight],
            [-imgHeight / 2, 0, imgHeight / 2]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-imgHeight, 0, imgHeight],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, imgHeight / 1.5], [0, 1]),
    };
  });

  return {
    headerAnimatedStyle,
    imageAnimatedStyle,
    onLikePress,
    router,
    navigation,
    onSharePress,
    scrollAnimatedRef,
    house,
  };
};

export default useHouseDetail;
