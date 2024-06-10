import { CategoryItemWhereUniqueInput } from "../categoryItem/CategoryItemWhereUniqueInput";
import { FileCreateNestedManyWithoutItemsInput } from "./FileCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  categoryItem?: CategoryItemWhereUniqueInput | null;
  files?: FileCreateNestedManyWithoutItemsInput;
  name?: string | null;
  price?: number | null;
};
