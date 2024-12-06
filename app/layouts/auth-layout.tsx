import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 justify-center p-4">
      <div className="max-w-md flex items-center flex-col space-y-1 mb-5 w-fit">
        <h2 className="w-full text-center text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
          diskaas
        </h2>
        <p className="text-center tracking-tight text-sm md:text-base lg:text-lg leading-tight font-medium text-muted-foreground">
          social platform where you can discussion begins.
        </p>
      </div>
      <Outlet />
    </main>
  );
}
