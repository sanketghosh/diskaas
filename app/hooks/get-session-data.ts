import { authClient } from "@/app/lib/auth-client";

export const getSessionData = () => {
  const { useSession } = authClient;
  const { data } = useSession();
  return {
    id: data?.user.id,
    name: data?.user.name,
    email: data?.user.email,
    session: data?.session,
  };
};
