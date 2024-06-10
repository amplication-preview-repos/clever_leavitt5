import { ShopCreateNestedManyWithoutCuisinesInput } from "./ShopCreateNestedManyWithoutCuisinesInput";

export type CuisineCreateInput = {
  shops?: ShopCreateNestedManyWithoutCuisinesInput;
};
