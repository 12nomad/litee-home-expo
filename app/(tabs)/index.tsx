import { StyleSheet } from "react-native";
import { Tabs } from "expo-router";

import ExploreHeader from "@/components/ExploreHeader";
import useExploreScreen from "@/hooks/useExploreScreen";
import HousesMap from "@/components/HousesMap";
import HousesBottomSheet from "@/components/HousesBottomSheet";
import { View } from "@/components/Themed";
import { type House } from "@/types/house";
import { type HouseGeo } from "@/types/house-geo.type";

import data from "../../assets/data/airbnb-listings-min.json";
import geoData from "../../assets/data/airbnb-listings-geo-min.json";

export default function ExploreScreen() {
  const { currentCategory, onCategoryChange } = useExploreScreen();

  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          header: () => (
            <ExploreHeader
              currentCategory={currentCategory}
              setCurrentCategory={onCategoryChange}
            />
          ),
        }}
      />

      <HousesMap data={geoData as unknown as HouseGeo} />
      <HousesBottomSheet
        data={data as unknown as House[]}
        currentCategory={currentCategory}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
