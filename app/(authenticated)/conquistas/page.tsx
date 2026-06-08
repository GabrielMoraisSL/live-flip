import { Column, Row } from '@/components/server';
import { ProgressInfo } from '@/features/achieviments/components';

export default function Achieviments() {
  return (
    <Column className='text-neutral-200 2xl:flex-row gap-10 p-5 sm:p-10 2xl:p-0 2xl:m-10 w-full lg:pb-10 overflow-auto'>
      <Row className='w-full justify-between items-start gap-8'>
        <Column className='gap-5 w-2/3'>
          <h2 className='font-bold text-7xl uppercase'>
            Livro de <br />
            <span className='text-brand-primary italic'>Manobras</span>
          </h2>
          <p className='font-semibold opacity-80'>
            Acompanhe seu progresso. Cada <span>nova manobra</span> desbloqueada
            e <span>publicada</span> é uma
            <span> nova conquista</span> registrada aqui.
          </p>
        </Column>
        <ProgressInfo />
      </Row>
      
    </Column>
  );
}
