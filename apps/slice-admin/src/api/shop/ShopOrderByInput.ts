import { SortOrder } from "../../util/SortOrder";

export type ShopOrderByInput = {
  createdAt?: SortOrder;
  cuisineId?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
