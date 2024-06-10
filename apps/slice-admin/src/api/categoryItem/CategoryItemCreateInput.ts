import { ItemCreateNestedManyWithoutCategoryItemsInput } from "./ItemCreateNestedManyWithoutCategoryItemsInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type CategoryItemCreateInput = {
  items?: ItemCreateNestedManyWithoutCategoryItemsInput;
  name?: string | null;
  shop?: ShopWhereUniqueInput | null;
};
