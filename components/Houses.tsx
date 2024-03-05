import { useEffect, useState } from "react";

import { Text, View } from "./Themed";
import HouseCard from "./HouseCard";
import Styles from "@/constants/Styles";
import { type House } from "@/types/house";
import { Category } from "@/enums/category.enum";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";

interface HousesProps {
  data: House[];
  currentCategory: Category;
}

const Houses = ({ data, currentCategory }: HousesProps) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [currentCategory]);

  return (
    <View style={{ paddingHorizontal: 20, flex: 1 }}>
      <BottomSheetFlatList
        data={loading ? [] : data}
        renderItem={(item) => <HouseCard house={item} />}
        contentContainerStyle={{ gap: 20 }}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

export default Houses;
