import { CategoryItemCreateNestedManyWithoutShopsInput } from "./CategoryItemCreateNestedManyWithoutShopsInput";
import { CuisineWhereUniqueInput } from "../cuisine/CuisineWhereUniqueInput";

export type ShopCreateInput = {
  categoryItems?: CategoryItemCreateNestedManyWithoutShopsInput;
  cuisine?: CuisineWhereUniqueInput | null;
  location?: string | null;
  name?: string | null;
};
