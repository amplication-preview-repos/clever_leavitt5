import { CategoryItem } from "../categoryItem/CategoryItem";
import { File } from "../file/File";

export type Item = {
  categoryItem?: CategoryItem | null;
  createdAt: Date;
  files?: Array<File>;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
