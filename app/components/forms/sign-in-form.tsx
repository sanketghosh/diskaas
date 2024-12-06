//packages
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

// local modules
import { authClient } from "@/app/lib/auth-client";
import { SignInSchema } from "@/app/schemas";

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

export default function SignInForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signinHandler = async (values: z.infer<typeof SignInSchema>) => {
    const { email, password } = values;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          toast.success("User has been signed in successfully.");
          setLoading(false);
          form.reset();
          // redirect("/");
          navigate("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
          setLoading(false);
          form.reset();
        },
      }
    );
  };
  // handles auto filling fields with guest user details
  function handleAddGuest() {
    const values = form.getValues();

    if (values.email || values.password) {
      toast.warning("Fields are already filled");
    } else {
      form.reset({
        email: "guest@mail.com",
        password: "123456",
      });
      toast.success("Guest credentials have been added.");
    }
  }

  return (
    <AuthCard
      title="Welcome Back!"
      description="Continue from where you left last time, your personal data is safe and secure with us."
      footer="If you don't have an account just create one"
      changeHref="/signup"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(signinHandler)}>
          <div className="space-y-4">
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
                      placeholder="nD9I1xTod6mN31"
                      type="password"
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-4 w-full" disabled={loading}>
            {loading ? <Loader2Icon className="animate-spin" /> : "Login"}
          </Button>
          <Button
            type="button"
            className="mt-4 w-full"
            variant={"secondary"}
            onClick={handleAddGuest}
          >
            Guest Credentials
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
}
