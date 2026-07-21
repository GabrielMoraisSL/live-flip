import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import { ValuesEnums } from '@/enums/values';

export async function requireAuth() {
  const session = await auth();

  if (!session?.user) {
    redirect(ValuesEnums.Routes.Login);
  }

  if (session.error === 'TokenExpiredError') {
    redirect(ValuesEnums.Routes.Login);
  }

  return session;
}
