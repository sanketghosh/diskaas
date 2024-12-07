// packages
import { Outlet } from "react-router";

// components
import Header from "@/app/components/header";

export default function MainLayout() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-4xl">
        <Header />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
