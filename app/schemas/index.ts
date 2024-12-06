import { z } from "zod";

export const SignUpSchema = z
  .object({
    name: z
      .string()
      .min(4, {
        message: "Name of at least four characters is needed..",
      })
      .max(100, {
        message: "Maximum hundred characters acceptable.",
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
    message: "Must be of atleast six characters.",
  }),
});
