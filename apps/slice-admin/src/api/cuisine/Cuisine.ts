import { Shop } from "../shop/Shop";

export type Cuisine = {
  createdAt: Date;
  id: string;
  shops?: Array<Shop>;
  updatedAt: Date;
};
