import { StringFilter } from "../../util/StringFilter";
import { ShopListRelationFilter } from "../shop/ShopListRelationFilter";

export type CuisineWhereInput = {
  id?: StringFilter;
  shops?: ShopListRelationFilter;
};
