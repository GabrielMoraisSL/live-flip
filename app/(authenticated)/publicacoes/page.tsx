import { Row } from '@/components/row';
import Timeline from './components/timeline';

export default function Feed() {
  return (
    <Row className='flex-1 min-h-0 gap-2 items-start overflow-hidden mb-10'>
      <Timeline />
      {/* <UsersList /> */}
    </Row>
  );
}
