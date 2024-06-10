import { CategoryItemUpdateManyWithoutShopsInput } from "./CategoryItemUpdateManyWithoutShopsInput";
import { CuisineWhereUniqueInput } from "../cuisine/CuisineWhereUniqueInput";

export type ShopUpdateInput = {
  categoryItems?: CategoryItemUpdateManyWithoutShopsInput;
  cuisine?: CuisineWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
