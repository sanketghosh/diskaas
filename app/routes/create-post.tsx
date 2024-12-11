import CreatePostForm from "../components/forms/create-post-form";
// import type { Route } from "./+types/create-post";

export default function CreatePost() {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full p-4">
      <CreatePostForm />
    </div>
  );
}
