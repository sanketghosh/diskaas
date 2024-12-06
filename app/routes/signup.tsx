import SignUpForm from "../components/forms/sign-up-form";
import type { Route } from "./+types/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "diskaas | signup" },
    {
      name: "description",
      content: "SignUp page for diskaas social platform.",
    },
  ];
}

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center">
      <SignUpForm />
    </div>
  );
}
