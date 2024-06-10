import { Item } from "../item/Item";

export type File = {
  createdAt: Date;
  id: string;
  item?: Item | null;
  name: string | null;
  updatedAt: Date;
  url: string | null;
};
