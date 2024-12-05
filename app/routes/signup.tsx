import React, { useState } from "react";
import { authClient } from "~/lib/auth-client";

import type { Route } from "./+types/signup";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email(
      {
        email,
        password,
        name,
        callbackURL: "/signin",
      },
      {
        onRequest: (ctx) => {
          // show loading state
          setLoading(true);
        },
        onSuccess: (ctx) => {
          // redirect to home
          alert("user created");
          setLoading(false);
        },
        onError: (ctx) => {
          alert(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 justify-center">
      <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
      <form
        onSubmit={signUp}
        className="flex flex-col space-y-5 w-[400px] bg-gray-50 p-5 rounded-lg"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="px-2 py-2.5 border focus-within:ring-2 focus-within:ring-emerald-600 rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="px-2 py-2.5 border focus-within:ring-2 focus-within:ring-emerald-600 rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="px-2 py-2.5 border focus-within:ring-2 focus-within:ring-emerald-600 rounded-md"
        />
        <button
          type="submit"
          className="px-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 rounded-md transition-all text-gray-50"
        >
          {loading ? "SigningUp..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}
