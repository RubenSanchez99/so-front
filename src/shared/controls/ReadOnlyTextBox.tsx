import * as React from "react";
import { Field, Label, Control, Input, Help } from "rbx";

interface TextBoxProps {
  label: string;
  value: string;
}

export const ReadOnlyTextBox: React.SFC<TextBoxProps> = ({ label, value }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Control>
        <Input readOnly={true} value={value} />
      </Control>
    </Field>
  );
};
