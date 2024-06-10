import { CategoryItemWhereUniqueInput } from "../categoryItem/CategoryItemWhereUniqueInput";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ItemWhereInput = {
  categoryItem?: CategoryItemWhereUniqueInput;
  files?: FileListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
};
