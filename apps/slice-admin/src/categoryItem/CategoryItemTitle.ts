import { CategoryItem as TCategoryItem } from "../api/categoryItem/CategoryItem";

export const CATEGORYITEM_TITLE_FIELD = "name";

export const CategoryItemTitle = (record: TCategoryItem): string => {
  return record.name?.toString() || String(record.id);
};
