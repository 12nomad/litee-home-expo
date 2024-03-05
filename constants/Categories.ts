import { ComponentProps } from "react";
import { Category } from "@/enums/category.enum";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const Categories: {
  id: number;
  name: Category;
  icon: ComponentProps<typeof MaterialIcons>["name"];
}[] = [
  {
    id: 1,
    name: Category.Trending,
    icon: "local-fire-department",
  },
  {
    id: 2,
    name: Category.Beach,
    icon: "beach-access",
  },
  {
    id: 3,
    name: Category.Cabins,
    icon: "cabin",
  },
  {
    id: 4,
    name: Category.Design,
    icon: "apartment",
  },
  {
    id: 5,
    name: Category.Islands,
    icon: "houseboat",
  },
  {
    id: 6,
    name: Category.Campers,
    icon: "forest",
  },
  {
    id: 7,
    name: Category.Mansions,
    icon: "cottage",
  },
  {
    id: 8,
    name: Category.Lake,
    icon: "kayaking",
  },
];
