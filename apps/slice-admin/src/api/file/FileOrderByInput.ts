import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  itemId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
