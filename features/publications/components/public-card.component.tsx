'use client';
import { cn } from '@/lib/cn.utils';
import { useRef, useState } from 'react';
import { FaFire, FaLocationDot } from 'react-icons/fa6';
import { Column } from '../../../components/server/column.component';
import { Row } from '../../../components/server/row.component';
import { PublicCardSkeleton } from './public-card-skeleton.component';
import { IoMdPlay } from 'react-icons/io';
import { MdPlayArrow } from 'react-icons/md';

interface PublicCardProps {
  achievement?: string;
  title: string;
  user: string;
  localization: string;
  likes: number[];
  video: string;
  isLoading?: boolean;
}

export const PublicationCard = ({
  likes,
  achievement,
  title,
  user,
  localization,
  video,
  isLoading,
}: PublicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [localLikes, setLocalLikes] = useState<number[]>(likes);
  const userId = 1; // substituir pelo ID real do usuário autenticado
  const hasLiked = localLikes.includes(userId);

  const videoRef = useRef<HTMLVideoElement>(null);

  function handlePlay() {
    videoRef.current?.play();
    setIsPlaying(true);
  }

  const handleLike = async () => {
    setLocalLikes((prev) =>
      hasLiked ? prev.filter((id) => id !== userId) : [...prev, userId],
    );

    // Quando tiver backend, descomentar:
    // try {
    //   await api.post(`/publications/${publicationId}/like`);
    // } catch {
    //   // Reverter se falhar
    //   setLocalLikes(likes);
    // }
  };

  if (isLoading) return <PublicCardSkeleton />;

  return (
    <Column
      className={cn(
        'gap-0 border border-neutral-800 bg-brand-neutral-850 rounded-2xl w-full sm:w-fit h-auto relative uppercase font-bold',
        achievement && 'border-brand-primary',
      )}
    >
      {achievement && (
        <p
          className={cn(
            'absolute top-4 left-4 z-10 text-gray-100 text-xs italic pl-3 pr-4 py-2 bg-brand-primary w-fit rounded select-none transition-opacity',
            isPlaying && 'opacity-0',
          )}
        >
          Conquista desbloqueada: {achievement}
        </p>
      )}

      <div className='flex w-full max-h-[70vh] justify-center items-center sm:w-86 relative overflow-hidden rounded-t-2xl'>
        <button
          className={cn(
            'absolute items-center max-md:hidden z-20 bg-brand-primary p-4 rounded-full m-auto transition-opacity',
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100',
          )}
          onClick={handlePlay}
        >
          <MdPlayArrow className='size-10 shrink-0' />
        </button>

        <video
          ref={videoRef}
          className='inset-0 w-full max-h-[70vh] object-fill'
          src={video}
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      <Column className='gap-2 p-5 w-full sm:w-86'>
        <h3 className='text-2xl sm:text-3xl text-white italic'>{title}</h3>
        <Row className='gap-2 justify-between items-center'>
          <Column className='gap-1 items-start'>
            <span className='text-brand-primary hover:underline cursor-pointer'>
              @{user}
            </span>
            <Row className='text-neutral-700 text-sm'>
              <FaLocationDot />
              <span>{localization}</span>
            </Row>
          </Column>
          <button
            className={cn(
              'border cursor-pointer border-gray-600 bg-neutral-950 text-white size-15 min-w-15 transition-colors',
              hasLiked && 'border-brand-primary',
            )}
            onClick={handleLike}
          >
            <Column className='justify-center items-center h-full gap-px mt-1'>
              <FaFire
                className={cn(
                  'text-white transition-colors',
                  hasLiked && 'text-brand-primary',
                )}
              />
              <span>{localLikes.length}</span>
            </Column>
          </button>
        </Row>
      </Column>
    </Column>
  );
};
