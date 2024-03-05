import { useEffect, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

import Houses from "./Houses";
import Styles from "@/constants/Styles";
import { House } from "@/types/house";
import { Text, View } from "./Themed";
import { Category } from "@/enums/category.enum";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HousesBottomSheetProps {
  data: House[];
  currentCategory: Category;
}

const HousesBottomSheet = ({
  currentCategory,
  data,
}: HousesBottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["7%", "100%"], []);

  useEffect(() => {
    bottomSheetRef.current?.expand();
  }, [currentCategory]);

  const onMapPress = () => bottomSheetRef.current?.collapse();

  return (
    <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} index={1}>
      <View style={styles.container}>
        <Houses
          data={data as unknown as House[]}
          currentCategory={currentCategory}
        />

        <TouchableOpacity style={styles.mapBtn} onPress={onMapPress}>
          <Text style={[Styles.textBold, { fontSize: 16, color: "#fff" }]}>
            Map
          </Text>
          <Ionicons name="map-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  mapBtn: {
    position: "absolute",
    bottom: 25,
    backgroundColor: "#000",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    alignSelf: "center",
  },
});

export default HousesBottomSheet;
