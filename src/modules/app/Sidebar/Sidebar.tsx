import * as React from "react";
import SidebarData from "./model/SidebarData";
import { List, Menu } from "rbx";
import SidebarLink from "./model/SidebarLink";
import MetisMenu from "react-metismenu";
import RouterLink from "react-metismenu-router-link";

const content = [
  {
    icon: "cog",
    label: "Alumno",
    to: "/alumno"
  }
];

export interface Props {}

export interface State {
  opened: string;
  selectedLink: string;
}

export default class Sidebar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      opened: "",
      selectedLink: ""
    };
  }

  render() {
    return <MetisMenu content={content} LinkComponent={RouterLink} />;
  }
}
