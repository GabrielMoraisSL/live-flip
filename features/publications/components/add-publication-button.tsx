'use client';
import { Row } from '@/components/row';
import { cn } from '@/lib/cn.utils';
import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

export default function AddPublicationButton() {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );

    if (anchorRef.current) observer.observe(anchorRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={anchorRef} className='h-px w-full' />
      <button className='px-6 py-2 cursor-pointer bg-gray-100 rounded-full font-bold text-nowrap uppercase text-sm'>
        <Row className=''>
          <FaPlus />
          Adicionar
        </Row>
      </button>
      <button
        className={cn(
          'hidden',
          !isVisible &&
            'block px-6 py-2 cursor-pointer bg-gray-100 rounded-full font-bold text-nowrap uppercase fixed bottom-18 xl:bottom-10 right-5 xl:right-10 z-30 shadow-lg text-xl xl:text-lg p-4 animate-bounce-in transition-all',
        )}
      >
        <Row>
          <FaPlus className='animate-spin-once' />
          <span className='hidden xl:block'>Adicionar</span>
        </Row>
      </button>
    </>
  );
}
