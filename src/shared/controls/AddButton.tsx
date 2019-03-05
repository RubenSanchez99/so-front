import * as React from "react";
import { Button } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

interface AddButtonProps {
  route: string;
}

export const AddButton: React.SFC<AddButtonProps> = ({ route }) => {
  return (
    <Button as={Link} to={route} type="button" color="warning">
      <FontAwesomeIcon icon={faPlus} />
    </Button>
  );
};
