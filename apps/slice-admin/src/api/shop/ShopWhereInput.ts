import { CategoryItemListRelationFilter } from "../categoryItem/CategoryItemListRelationFilter";
import { CuisineWhereUniqueInput } from "../cuisine/CuisineWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ShopWhereInput = {
  categoryItems?: CategoryItemListRelationFilter;
  cuisine?: CuisineWhereUniqueInput;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
