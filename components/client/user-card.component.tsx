import Image, { StaticImageData } from 'next/image';
import { Column } from '../server/column.component';
import { Row } from '../server/row.component';
import { FaLocationPin } from 'react-icons/fa6';
import { BiRightArrowAlt } from 'react-icons/bi';
import { IoMdPin } from 'react-icons/io';

interface UserCardProps {
  username: string;
  location: string;
  highlight?: string;
  photoUrl: StaticImageData | string;
}

export const UserCard = ({
  username,
  location,
  highlight,
  photoUrl,
}: UserCardProps) => {
  return (
    <Column className='gap-4 items-center justify-center m-2 bg-neutral-800 p-6'>
      <div className='p-2 border-2 border-brand-secondary border-dotted rotate-2'>
        <Image
          src={photoUrl}
          alt={username}
          width={200}
          height={200}
          className='bg-black p-1 -rotate-2'
        />
      </div>
      <p className='text-brand-secondary text-3xl normal-case'>@{username}</p>
      <Row className='text-sm [&>svg]:size-5 text-gray-500 uppercase gap-2'>
        <IoMdPin />
        {location}
      </Row>
      {highlight && (
        <span className='text-sm text-black -rotate-2 px-4 py-2 bg-brand-secondary w-fit'>
          {highlight}
        </span>
      )}
      <button className='size-14 cursor-pointer [&>svg]:size-8 flex items-center justify-center bg-neutral-700 text-white'>
        <BiRightArrowAlt />
      </button>
    </Column>
  );
};
