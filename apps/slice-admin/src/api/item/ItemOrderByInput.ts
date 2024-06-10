import { SortOrder } from "../../util/SortOrder";

export type ItemOrderByInput = {
  categoryItemId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
