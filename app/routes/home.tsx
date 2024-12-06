import { getSessionData } from "@/app/hooks/get-session-data";
import { ArrowBigUpIcon, MessageSquareIcon } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
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

  return (
    <main>
      <div>
        <div className="space-y-2 border p-2.5 rounded-md">
          <p className="text-xs font-medium bg-secondary w-fit px-4 py-0.5 rounded-md border">
            sample@mail.com
          </p>
          <div>
            <h2 className="truncate text-sm sm:text-base font-medium">
              This is a sample post title
            </h2>
            <p className="line-clamp-2 text-xs sm:text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              animi aperiam, harum quo laboriosam dolore, mollitia pariatur
              neque cum similique iusto enim distinctio nemo minus sunt! Nisi,
              consequatur. Aut, officia voluptatibus ullam atque officiis animi?
              Eos ipsum quidem facere animi!
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Button size={"sm"} variant={"secondary"}>
              <ArrowBigUpIcon size={26} />
              12.3K
            </Button>
            <Button size={"sm"} variant={"secondary"}>
              <MessageSquareIcon size={17} />
              500
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
