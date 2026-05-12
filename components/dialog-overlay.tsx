import { cn } from '@/lib/utils';

export default function DialogOverlay({
  isOpen,
  close,
}: {
  isOpen: boolean;
  close: () => void;
}) {
  return (
    <div
      className={cn(
        'fixed inset-0 bg-black/60 z-40 transition-opacity duration-200',
        isOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      onMouseDown={(e) => e.preventDefault()}
      onClick={close}
    />
  );
}
