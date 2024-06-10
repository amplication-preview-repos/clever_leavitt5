import { CategoryItem } from "../categoryItem/CategoryItem";
import { Cuisine } from "../cuisine/Cuisine";

export type Shop = {
  categoryItems?: Array<CategoryItem>;
  createdAt: Date;
  cuisine?: Cuisine | null;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
