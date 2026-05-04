import { Column } from "@/components/column";
import PublicationCard from "@/components/public-card";
import { MOCK_PUBLICATIONS } from "@/mocks/publications";

export default function Timeline() {
  return (
    <Column className="flex-1 min-h-0 overflow-y-auto gap-4 m-10 mr-0 pr-10 h-full">
      <p className="text-gray-300 font-bold uppercase">Publicações:</p>
      <div className="grid 2xl:grid-cols-2 gap-10 pb-14">
        {MOCK_PUBLICATIONS.map((publication) => (
          <PublicationCard key={publication.id} {...publication} />
        ))}
      </div>
    </Column>
  );
}
