import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores, without spaces",
      )
      .min(1, {
        message: "Username of at least four characters needed.",
      })
      .max(12, {
        message: "Maximum twelve characters acceptable.",
      }),
    email: z.string().email({
      message: "A valid email is required",
    }),
    password: z.string().min(9, {
      message: "At least a password of nine characters needed.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password did not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Not a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Must be of at least six characters.",
  }),
});

export const CreatePostSchema = z.object({
  title: z.string({ required_error: "A post title is must" }),
  description: z.string(),
});
