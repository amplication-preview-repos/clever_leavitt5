import { Cuisine as TCuisine } from "../api/cuisine/Cuisine";

export const CUISINE_TITLE_FIELD = "id";

export const CuisineTitle = (record: TCuisine): string => {
  return record.id?.toString() || String(record.id);
};
