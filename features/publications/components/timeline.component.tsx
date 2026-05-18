import { Column } from '@/components/column.component';
import { Row } from '@/components/row.component';
import { MOCK_PUBLICATIONS } from '@/features/publications/mocks/publications.mock';
import AddPublicationButton from './add-publication-button.component';
import InfoCard from './info-card.component';
import PublicationCard from './public-card.component';

export default function Timeline() {
  return (
    <Column className='flex-1 min-h-0 overflow-y-auto gap-6 p-5 pb-2 mr-0 pr-6 md:p-10 h-full'>
      <InfoCard />
      <Row>
        <h2 className='text-gray-300 text-xl font-bold italic uppercase'>
          Publicações
        </h2>
        <AddPublicationButton />
      </Row>
      <Column className='gap-10 pb-4 items-center'>
        {MOCK_PUBLICATIONS.map((publication) => (
          <PublicationCard key={publication.id} {...publication} />
        ))}
      </Column>
      {/* <PublicCardSkeleton /> */}
    </Column>
  );
}
