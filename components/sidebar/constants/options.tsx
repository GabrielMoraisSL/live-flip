import { Routes } from "@/enums/routes";
import { MedalIcon } from "@/public/svg/medal";
import { FaUser } from "react-icons/fa";
import { MdOutlineDynamicFeed } from "react-icons/md";

export const SIDEBAR_OPTIONS = [
  {
    icon: <MdOutlineDynamicFeed />,
    label: "Feed",
    route: Routes.Feed,
  },
  {
    icon: <FaUser />,
    label: "Perfil",
    route: Routes.Profile,
  },
  {
    icon: <MedalIcon />,
    label: "Conquistas",
    route: Routes.Achievements,
  },
];
