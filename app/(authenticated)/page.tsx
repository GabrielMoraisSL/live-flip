import { Row } from '@/components/row.component';
import { Timeline } from '@/features/publications/components';

export default function Principal() {
  return (
    <Row className='flex-1 min-h-0 gap-2 items-start overflow-hidden'>
      <Timeline />
    </Row>
  );
}
