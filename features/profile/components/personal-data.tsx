import { Column } from "@/components/column";
import Image from "next/image";
import UserImage from "@/public/teste-publi.jpg";

interface PersonalDataProps {
  username: string;
  name: string;
  location: string;
  instance: string;
  photoUrl?: string;
}

export default function PersonalData({
  username,
  name,
  location,
  instance,
  photoUrl,
}: PersonalDataProps) {
  return (
    <>
      <div className="p-2 border-2 border-brand-secondary w-fit border-dotted rotate-2">
        <Image
          src={photoUrl || UserImage}
          alt={username}
          width={200}
          height={200}
          className="bg-black p-1 -rotate-2"
        />
      </div>
      <p className="text-brand-secondary text-4xl normal-case">@{username}</p>
      <Column className="bg-black/15 p-4 w-2/3 rounded-r-md text-gray-500 uppercase border-l-2 border-brand-primary pl-4 gap-2">
        <p>
          <span className="text-xs">Nome:</span> {name}
        </p>
        <p className="[&_svg]:size-5 text-brand-primary">
          <span className="text-xs">Local:</span> {location}
        </p>
        <p>
          <span className="text-xs">Base:</span> {instance}
        </p>
      </Column>
    </>
  );
}
