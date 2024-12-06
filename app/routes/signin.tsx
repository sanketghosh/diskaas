import SignInForm from "../components/forms/sign-in-form";
import type { Route } from "./+types/signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "diskaas | signin " },
    {
      name: "description",
      content: "Sign in page for diskaas social platform.",
    },
  ];
}

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center">
      <SignInForm />
    </div>
  );
}
