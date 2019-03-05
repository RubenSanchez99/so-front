import * as React from "react";
import { Field, Label, Select, Input, Help } from "rbx";
import { Field as FormikField } from "formik";

interface DropDownListProps {
  label: string;
  name: string;
  placeholder: string;
  data: DropDownItem[];
  errors: string | undefined;
  touched: boolean | undefined;
}

interface DropDownItem {
  key: string;
  value: string;
}

export const DropDownList: React.SFC<DropDownListProps> = ({
  label,
  name,
  placeholder,
  data,
  errors,
  touched
}) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Select.Container
        fullwidth={true}
        color={errors && touched ? "danger" : undefined}
      >
        <Select as={FormikField} component="select" name={name}>
          <Select.Option hidden>{placeholder}</Select.Option>
          {data.map(item => (
            <Select.Option key={item.key} value={item.key}>
              {item.value}
            </Select.Option>
          ))}
        </Select>
      </Select.Container>
      {errors && touched ? <Help color="danger">{errors}</Help> : null}
    </Field>
  );
};
