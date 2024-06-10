import { StringFilter } from "../../util/StringFilter";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileWhereInput = {
  id?: StringFilter;
  item?: ItemWhereUniqueInput;
  name?: StringNullableFilter;
  url?: StringNullableFilter;
};
