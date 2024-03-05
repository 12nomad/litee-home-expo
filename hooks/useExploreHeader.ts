import { useRef } from "react";
import { TouchableOpacity, ScrollView } from "react-native";

import { Category } from "@/enums/category.enum";

const useExploreHeader = (setCurrentCategory: (category: Category) => void) => {
  const touchablesRef = useRef<(TouchableOpacity | null)[]>([]);
  const scrollRef = useRef<ScrollView | null>(null);

  const onSelectCategory = (name: Category, idx: number) => {
    setCurrentCategory(name);

    // @ts-expect-error
    touchablesRef.current[idx]?.measureLayout(scrollRef.current, (x) => {
      scrollRef.current?.scrollTo({
        x,
        y: 0,
        animated: true,
      });
    });
  };

  return { onSelectCategory, touchablesRef, scrollRef };
};

export default useExploreHeader;
