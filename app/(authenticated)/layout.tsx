import BottomMenu from '@/components/bottom-menu/bottom-menu.component';
import { Column } from '@/components/column.component';
import { Row } from '@/components/row.component';
import { Header } from '@/features/header/components';
import { Sidebar } from '@/features/sidebar/components';
import { ReactNode } from 'react';

export default function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Column className='gap-0 h-dvh sm:h-screen bg-neutral-950 overflow-hidden'>
      <Header />
      <Row className='flex-1 min-h-0 items-stretch'>
        <Sidebar />
        <div className='flex-1 min-h-0 flex overflow-hidden'>{children}</div>
      </Row>
      <BottomMenu />
    </Column>
  );
}
