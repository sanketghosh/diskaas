import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/auth/*", "./routes/auth.ts"),
  route("signup", "./routes/signup.tsx"),
  route("signin", "./routes/signin.tsx"),
] satisfies RouteConfig;
