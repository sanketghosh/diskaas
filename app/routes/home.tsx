// packages
import { ArrowBigUpIcon, MessageSquareIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/home";

// local modules
import { getSessionData } from "@/app/hooks/get-session-data";

// components
import { Button } from "@/app/components/ui/button";

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
          className="text-blue-600 underline underline-offset-4"
        >
          signup
        </Link>{" "}
        or{" "}
        <Link
          to={"/signin"}
          className="text-blue-600 underline underline-offset-4"
        >
          signin
        </Link>{" "}
      </div>
    ); // Or you could show a loading state
  }

  return (
    <main>
      <div>
        <div className="space-y-2 rounded-md border p-2.5">
          <p className="w-fit rounded-md border bg-secondary px-4 py-0.5 text-xs font-medium">
            sample@mail.com
          </p>
          <div>
            <h2 className="truncate text-sm font-medium sm:text-base">
              This is a sample post title
            </h2>
            <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
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
