import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";

export type FileCreateInput = {
  item?: ItemWhereUniqueInput | null;
  name?: string | null;
  url?: string | null;
};
