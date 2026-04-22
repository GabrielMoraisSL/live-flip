import { Column } from '@/components/column';

export default function Loading() {
  return (
    <Column className='grow bg-neutral-800 justify-center items-center'>
      <h1 className='pl-6 pr-5 italic py-3 bg-brand-primary text-center animate-pulse font-bold shadow-hard text-4xl sm:text-6xl -rotate-4 z-20'>
        LIVEFLIP
      </h1>
    </Column>
  );
}
