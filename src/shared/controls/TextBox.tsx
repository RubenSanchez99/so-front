import * as React from "react";
import { Field, Label, Control, Input, Help } from "rbx";
import { Field as FormikField } from "formik";

interface TextBoxProps {
  label: string;
  name: string;
  placeholder: string;
  errors: string | undefined;
  touched: boolean | undefined;
}

export const TextBox: React.SFC<TextBoxProps> = ({
  label,
  name,
  placeholder,
  errors,
  touched
}) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Control>
        <Input
          as={FormikField}
          name={name}
          placeholder={placeholder}
          color={errors && touched ? "danger" : undefined}
        />
      </Control>
      {errors && touched ? <Help color="danger">{errors}</Help> : null}
    </Field>
  );
};
