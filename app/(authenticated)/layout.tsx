import { BottomMenu } from '@/features/bottom-menu';
import { Column, Row } from '@/components/server';
import { Sidebar } from '@/features/sidebar/components';
import { ReactNode } from 'react';
import { requireAuth } from '@/lib/auth/requireAuth';

export default async function AuthenticatedLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAuth();

  return (
    <Column className='gap-0 h-dvh sm:h-screen bg-neutral-950 overflow-hidden'>
      <Row className='flex-1 min-h-0 items-stretch max-lg:pb-12'>
        <Sidebar />
        <div className='flex-1 min-h-0 flex overflow-hidden'>{children}</div>
      </Row>
      <BottomMenu />
    </Column>
  );
}
