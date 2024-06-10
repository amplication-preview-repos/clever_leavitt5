import { StringFilter } from "../../util/StringFilter";
import { ItemListRelationFilter } from "../item/ItemListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type CategoryItemWhereInput = {
  id?: StringFilter;
  items?: ItemListRelationFilter;
  name?: StringNullableFilter;
  shop?: ShopWhereUniqueInput;
};
