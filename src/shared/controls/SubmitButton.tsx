import * as React from "react";
import { Button } from "rbx";

interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
}

export const SubmitButton: React.SFC<SubmitButtonProps> = ({
  isSubmitting,
  text
}) => {
  return (
    <Button
      type="submit"
      color="success"
      state={isSubmitting ? "loading" : undefined}
      disabled={isSubmitting}
    >
      {text}
    </Button>
  );
};
