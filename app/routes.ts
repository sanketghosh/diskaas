import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("api/auth/*", "./routes/auth.ts"),

  layout("./layouts/main-layout.tsx", [
    index("routes/home.tsx"),
    route("createpost", "./routes/create-post.tsx"),
    route("profile", "./routes/profile.tsx"),
  ]),

  layout("./layouts/auth-layout.tsx", [
    route("signup", "./routes/signup.tsx"),
    route("signin", "./routes/signin.tsx"),
  ]),
] satisfies RouteConfig;
