import SidebarLink from "./SidebarLink";

export default interface SidebarSection {
  name: string;
  open: boolean;
  links: SidebarLink[];
}
