import { CategoryItemWhereUniqueInput } from "../categoryItem/CategoryItemWhereUniqueInput";
import { FileUpdateManyWithoutItemsInput } from "./FileUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  categoryItem?: CategoryItemWhereUniqueInput | null;
  files?: FileUpdateManyWithoutItemsInput;
  name?: string | null;
  price?: number | null;
};
