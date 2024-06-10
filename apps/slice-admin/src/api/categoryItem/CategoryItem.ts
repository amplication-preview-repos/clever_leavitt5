import { Item } from "../item/Item";
import { Shop } from "../shop/Shop";

export type CategoryItem = {
  createdAt: Date;
  id: string;
  items?: Array<Item>;
  name: string | null;
  shop?: Shop | null;
  updatedAt: Date;
};
