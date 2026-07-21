import { Suspense } from 'react';

export default function UnauthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={null}>{children}</Suspense>;
}
