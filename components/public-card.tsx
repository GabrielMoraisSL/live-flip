"use client";
import { cn } from "@/lib/utils";
import { Column } from "./column";
import { useState } from "react";
import { Row } from "./row";
import { FaFire } from "react-icons/fa6";

interface PublicCardProps {
  achievement?: string;
  title: string;
  user: string;
  localization: string;
  likes: number[];
  video: string;
}

export default function PublicationCard({
  likes,
  achievement,
  title,
  user,
  localization,
  video,
}: PublicCardProps) {
  const [isPlaying] = useState(false);
  const [localLikes, setLocalLikes] = useState<number[]>(likes);
  const userId = 1; // substituir pelo ID real do usuário autenticado
  const hasLiked = localLikes.includes(userId);

  const handleLike = async () => {
    // Otimistic update — atualiza a UI antes do backend responder
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
  return (
    <Column className="gap-0 w-full h-full uppercase font-bold">
      {achievement && (
        <p className="text-black text-sm italic pl-4 pr-5 py-1 bg-brand-primary w-fit">
          Conquista desbloqueada: {achievement}
        </p>
      )}
      <Column
        className={cn(
          "gap-0 border border-gray-600 min-w-full h-full mt-7 shadow-hard-white",
          achievement && "border-4 border-brand-primary mt-0 shadow-hard-blue",
        )}
      >
        <iframe
          className="w-full min-h-80"
          src={`https://www.youtube.com/embed/${video}?autoplay=${
            isPlaying ? 1 : 0
          }&controls=1`}
          title={title}
          allow="accelerometer; autoplay; picture-in-picture"
        />
        <Row className="gap-6 items-end p-10">
          <Column className="gap-6">
            <p className="text-5xl text-white italic">{title}</p>
            <Row className="gap-2">
              <span className="text-brand-primary">@{user}</span>
              <div className="size-1 bg-brand-primary" />
              <span className="text-gray-400">{localization}</span>
            </Row>
          </Column>
          <button
            className={cn(
              "bg-neutral-800 border border-gray-600 text-white size-15 min-w-15 transition-colors",
              hasLiked && "border-brand-primary",
            )}
            onClick={handleLike}
          >
            <Column className="justify-center items-center h-full gap-px mt-1">
              <FaFire
                className={cn(
                  "text-white transition-colors",
                  hasLiked && "text-brand-primary",
                )}
              />
              <span>{localLikes.length}</span>
            </Column>
          </button>
        </Row>
      </Column>
    </Column>
  );
}
