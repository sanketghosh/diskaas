// packages
import { ArrowBigUpIcon, MessageSquareIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";
import type { Route } from "./+types/home";

// local modules
import { getSessionData } from "@/app/hooks/get-session-data";

// components
import { Button } from "@/app/components/ui/button";
import { fakePostData } from "../_data";
import type { PostCardTypes } from "../types";
import PostCard from "../components/cards/post-card";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "diskaas" },
    { name: "description", content: "Welcome to diskaas social app!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();
  const { session } = getSessionData();
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
      <div className="space-y-4">
        {fakePostData.map((post: PostCardTypes) => (
          <PostCard props={post} key={post.id} />
        ))}
      </div>
    </main>
  );
}
