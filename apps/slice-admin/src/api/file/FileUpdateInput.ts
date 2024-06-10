import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type FileUpdateInput = {
  item?: ItemWhereUniqueInput | null;
  name?: string | null;
  url?: string | null;
};
