import { Column } from '@/components/column.component';
import Image, { StaticImageData } from 'next/image';
import UserImage from '@/public/teste-publi.jpg';

interface PersonalDataProps {
  username: string;
  name: string;
  location: string;
  instance: string;
  photoUrl?: string | StaticImageData;
}

export default function PersonalData({
  username,
  name,
  location,
  instance,
  photoUrl,
}: PersonalDataProps) {
  return (
    <>
      <Column className='gap-3 max-lg:items-center max-lg:justify-center max-lg:mx-auto'>
        <div className='flex size-50 rounded-full border-2 border-dashed border-brand-primary p-2'>
          <div className='w-full h-full rounded-full overflow-hidden'>
            <Image
              alt='user-image'
              src={UserImage}
              width={150}
              height={150}
              className='object-cover w-full h-full'
            />
          </div>
        </div>
        <p className='text-brand-secondary text-3xl sm:text-4xl normal-case'>@{username}</p>
      </Column>
      <Column className='bg-black/15 text-sm sm:text-base p-4 lg:w-2/3 rounded-r-md text-gray-500 uppercase border-l-2 border-brand-primary pl-4 gap-2'>
        <p>
          <span className='text-xs'>Nome:</span> {name}
        </p>
        <p className='[&_svg]:size-5 text-brand-primary'>
          <span className='text-xs'>Local:</span> {location}
        </p>
        <p>
          <span className='text-xs'>Base:</span> {instance}
        </p>
      </Column>
    </>
  );
}
