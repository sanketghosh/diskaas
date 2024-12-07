// packages
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import type { z } from "zod";

// local modules
import { authClient } from "@/app/lib/auth-client";
import { SignUpSchema } from "@/app/schemas";

// components
import AuthCard from "@/app/components/cards/auth-card";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";

export default function SignUpForm() {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const navigate = useNavigate();
  const signupHandler = async (values: z.infer<typeof SignUpSchema>) => {
    const { email, confirmPassword, name } = values;

    await authClient.signUp.email(
      {
        email,
        password: confirmPassword,
        name,
        callbackURL: "/signin",
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("User has been signed up successfully.");
          form.reset();
          setLoading(false);
          // redirect("/signin");
          navigate("/signin");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          form.reset();
          setLoading(false);
        },
      },
    );
  };

  return (
    <AuthCard
      title="Get started"
      description="Start building your custom form in the simplest and easiest way possible."
      footer="If you already have an account, just signin."
      changeHref="/signin"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signupHandler)}>
          <div className="space-y-3 md:space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      type="text"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="johndoe@mail.com"
                      type="email"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="C5AjJHe9FQvLlg"
                      type="password"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-3 w-full md:mt-4">
            {loading ? <Loader2Icon className="animate-spin" /> : "Sign Up"}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
