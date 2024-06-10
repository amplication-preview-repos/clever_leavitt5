import { SortOrder } from "../../util/SortOrder";

export type CategoryItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  shopId?: SortOrder;
  updatedAt?: SortOrder;
};
