import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { CategoryItemTitle } from "../categoryItem/CategoryItemTitle";
import { CuisineTitle } from "../cuisine/CuisineTitle";

export const ShopEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="categoryItems"
          reference="CategoryItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryItemTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="cuisine.id" reference="Cuisine" label="Cuisine">
          <SelectInput optionText={CuisineTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
