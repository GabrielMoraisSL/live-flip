import { SystemEnums } from '@/enums/system-enums';
import { MedalIcon } from '@/public/svg/medal';
import { AiFillHome } from 'react-icons/ai';
import { BiMedal } from 'react-icons/bi';
import { FaSearch } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';

const { Routes, PagesItems } = SystemEnums.EnumsValues;

export const SCREENS_ITEMS = [
  {
    icon: <AiFillHome />,
    label: PagesItems.Main,
    route: Routes.Main,
  },
  {
    icon: <IoSearch />,
    label: PagesItems.Search,
    route: Routes.Search,
    hideOnDesktop: true,
  },
  {
    icon: <BiMedal />,
    label: PagesItems.Achievements,
    route: Routes.Achievements,
  },
  {
    icon: <FaRegUser className='size-5!' />,
    label: PagesItems.Profile,
    route: Routes.Profile,
  },
];

export type ScreensItemsType = (typeof SCREENS_ITEMS)[number];
