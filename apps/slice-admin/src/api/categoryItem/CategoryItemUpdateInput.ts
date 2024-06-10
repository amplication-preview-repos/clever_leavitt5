import { ItemUpdateManyWithoutCategoryItemsInput } from "./ItemUpdateManyWithoutCategoryItemsInput";
import { ShopWhereUniqueInput } from "../shop/ShopWhereUniqueInput";

export type CategoryItemUpdateInput = {
  items?: ItemUpdateManyWithoutCategoryItemsInput;
  name?: string | null;
  shop?: ShopWhereUniqueInput | null;
};
