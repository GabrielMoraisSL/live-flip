import { Row } from '@/components/server';
import { FaTrophy } from 'react-icons/fa6';
import { HiOutlineSparkles } from 'react-icons/hi';

export const InfoCard = () => {
  return (
    <Row className='p-5 gap-4 bg-brand-neutral-850 rounded-lg border border-neutral-800 relative md:max-w-2xl'>
      <div className='p-3 bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/20'>
        <HiOutlineSparkles className='size-6' />
      </div>
      <p className='text-gray-300 font-bold text-sm z-10'>
        Desbloqueie uma conquista e poste sua manobra agora!
      </p>

      {/* container que corta só o troféu */}
      <div className='absolute inset-0 rounded-lg overflow-hidden pointer-events-none'>
        <FaTrophy className='text-brand-primary/10 size-20 absolute right-0 top-10 md:top-2' />
      </div>
    </Row>
  );
};
