import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
      <div className="mb-5 flex w-fit max-w-md flex-col items-center space-y-1">
        <h2 className="w-full text-center text-2xl font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
          diskaas
        </h2>
        <p className="text-center text-sm font-medium leading-tight tracking-tight text-muted-foreground md:text-base lg:text-lg">
          social platform where you can discussion begins.
        </p>
      </div>
      <Outlet />
    </main>
  );
}
