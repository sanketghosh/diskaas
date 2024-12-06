import { getSessionData } from "@/app/hooks/get-session-data";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { authClient } from "../lib/auth-client";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "diskaas" },
    { name: "description", content: "Welcome to diskaas social app!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const { name, email, session } = getSessionData();
  /*
  useEffect(() => {
    if (!session) {
      navigate("/signup", { replace: true });
    }
  }, [session, navigate]);*/

  if (!session) {
    return (
      <div>
        You are not authenticated to view this page, go{" "}
        <Link
          to={"/signup"}
          className="underline underline-offset-4 text-blue-600"
        >
          signup
        </Link>{" "}
        or{" "}
        <Link
          to={"/signin"}
          className="underline underline-offset-4 text-blue-600"
        >
          signin
        </Link>{" "}
      </div>
    ); // Or you could show a loading state
  }

  const signoutHandler = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate("/signup", { replace: true }); // redirect to login page
        },
      },
    });
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <div>
        <h1>User's name: {name}</h1>
        <p>Email: {email}</p>
        <Button onClick={signoutHandler}>SignOut</Button>
      </div>
    </main>
  );
}
