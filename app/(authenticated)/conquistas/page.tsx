import { Column } from '@/components/server';
import { ProgressInfo, TricksList } from '@/features/achieviments/components';

export default function Achieviments() {
  return (
    <Column className='text-neutral-200 gap-8 p-5 sm:p-10 w-full max-lg:pb-10 overflow-auto'>
      <Column className='gap-5 w-2/3'>
        <h2 className='font-bold text-7xl uppercase'>
          Livro de <br />
          <span className='text-brand-primary italic'>Manobras</span>
        </h2>
        <p className='font-semibold opacity-80'>
          Acompanhe seu progresso. Cada <span>nova manobra</span> desbloqueada e{' '}
          <span>publicada</span> é uma
          <span> nova conquista</span> registrada aqui.
        </p>
      </Column>
      <ProgressInfo />
      <TricksList />
    </Column>
  );
}
