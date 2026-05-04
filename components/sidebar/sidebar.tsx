import { FaSignOutAlt } from "react-icons/fa";
import { Column } from "../column";
import { Row } from "../row";
import { SIDEBAR_OPTIONS } from "./constants/options";
import SidebarItem from "./sidebar-item";

export const Sidebar = () => {
  return (
    <Column className="uppercase text-gray-300 bg-neutral-800/30 justify-between pb-20 w-2xs self-stretch">
      <Column className="gap-0">
        <div className="px-6 py-10 text-brand-primary text-xs tracking-[0.2em]">
          underground network
        </div>
        {SIDEBAR_OPTIONS.map((option) => (
          <SidebarItem key={option.label} option={option} />
        ))}
      </Column>
      <Column className="gap-6">
        <button className="bg-brand-primary font-bold shadow-hard-gray text-black py-4 mx-10">
          Desbloqueiei uma
        </button>
        <button className="text-sm mx-10">
          <Row className="gap-2 font-bold">
            <FaSignOutAlt />
            Logout
          </Row>
        </button>
      </Column>
    </Column>
  );
};
