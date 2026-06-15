import { LabelsEnums } from '@/enums/labels';
import { ValuesEnums } from '@/enums/values';
import { AiFillHome } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

export const SCREENS_ITEMS = [
  {
    icon: <AiFillHome />,
    label: LabelsEnums.PagesItems.Main,
    route: ValuesEnums.Routes.Main,
  },
  {
    icon: <IoSearch />,
    label: LabelsEnums.PagesItems.Search,
    route: ValuesEnums.Routes.Search,
  },
  {
    icon: <BiMedal />,
    label: LabelsEnums.PagesItems.Achievements,
    route: ValuesEnums.Routes.Achievements,
  },
  {
    icon: <FaRegUser />,
    label: LabelsEnums.PagesItems.Profile,
    route: ValuesEnums.Routes.Profile,
  },
];

export type ScreensItemsType = (typeof SCREENS_ITEMS)[number];
