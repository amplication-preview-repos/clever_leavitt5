import { CategoryItemWhereInput } from "./CategoryItemWhereInput";
import { CategoryItemOrderByInput } from "./CategoryItemOrderByInput";

export type CategoryItemFindManyArgs = {
  where?: CategoryItemWhereInput;
  orderBy?: Array<CategoryItemOrderByInput>;
  skip?: number;
  take?: number;
};
