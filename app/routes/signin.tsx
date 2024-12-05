import type { Route } from "./+types/signin";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignIn() {
  return <h1>Sign In</h1>;
}
