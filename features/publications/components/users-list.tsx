import { Column } from "@/components/column";
import UserCard from "@/components/user-card";
import { MOCK_USERS } from "@/features/user/mocks";

export default function UsersList() {
  return (
    <Column className="w-sm uppercase font-bold pt-6 px-2 gap-4 h-full min-h-0">
      <p className="text-gray-300">Local Crew:</p>
      <Column className="min-h-0 overflow-y-auto gap-10">
        {MOCK_USERS.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Column>
    </Column>
  );
}
