import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { getSessionData } from "../hooks/get-session-data";
import { authClient } from "../lib/auth-client";

export default function Profile() {
  const navigate = useNavigate();
  const { session, email, name } = getSessionData();

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
    <div>
      <div className="space-y-6">
        <div className="">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p>{email}</p>
        </div>
        <Button onClick={signoutHandler}>
          SignOut
          <LogOutIcon />
        </Button>
      </div>
    </div>
  );
}
