import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import useExploreHeader from "@/hooks/useExploreHeader";
import { Categories } from "@/constants/Categories";
import { Text, View } from "./Themed";
import { Category } from "@/enums/category.enum";
import { exploreHeaderStyles } from "@/styles/exploreHeader.style";
import Styles from "@/constants/Styles";

interface ExploreHeaderProps {
  currentCategory: Category;
  setCurrentCategory: (category: Category) => void;
}

const ExploreHeader = ({
  currentCategory,
  setCurrentCategory,
}: ExploreHeaderProps) => {
  const { onSelectCategory, scrollRef, touchablesRef } =
    useExploreHeader(setCurrentCategory);

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <View style={exploreHeaderStyles.container}>
        <Link href="/(modals)/booking" asChild>
          <TouchableOpacity style={exploreHeaderStyles.search}>
            <MaterialIcons name="search" size={24} />
            <View>
              <Text style={exploreHeaderStyles.textMedium}>Where to?</Text>
              <Text style={exploreHeaderStyles.textThin}>
                Anywhere · Any week · Add guests
              </Text>
            </View>
          </TouchableOpacity>
        </Link>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 20 }}
          ref={scrollRef}
        >
          {Categories.map((el, idx) => (
            <TouchableOpacity
              key={el.id}
              ref={(ref) => (touchablesRef.current[idx] = ref)}
              style={[
                exploreHeaderStyles.category,
                {
                  borderBottomWidth: currentCategory === el.name ? 1 : 0,
                },
              ]}
              onPress={() => onSelectCategory(el.name, idx)}
            >
              <MaterialIcons
                name={el.icon}
                size={24}
                style={{ opacity: currentCategory === el.name ? 1 : 0.6 }}
              />
              <Text style={{ opacity: currentCategory === el.name ? 1 : 0.6 }}>
                {el.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;
