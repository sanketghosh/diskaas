// packages
import { QuoteIcon } from "lucide-react";
import { Link, Outlet } from "react-router";

// components
import { Button, buttonVariants } from "@/app/components/ui/button";
import { cn } from "@/app/lib/utils";

const links = [
  {
    href: "/createpost",
    label: "post",
  },
  {
    href: "/profile",
    label: "profile",
  },
];

export default function MainLayout() {
  return (
    <main className="w-full">
      <div className="mx-auto max-w-4xl">
        <header className="flex items-center justify-between bg-orange-500 px-4 py-3">
          <nav className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <Link
              to={"/"}
              className="flex items-center gap-0.5 text-lg font-semibold"
            >
              <div className="flex size-5 items-center justify-center bg-foreground text-orange-500">
                <QuoteIcon size={15} className="fill-orange-500" />
              </div>
              diskaas
            </Link>

            <div className="space-x-2 text-sm md:text-base">
              {links.map((link) => (
                <Link
                  to={link.href}
                  className="underline underline-offset-4 hover:text-foreground/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <Button
            className={cn(
              buttonVariants({
                size: "sm",
                variant: "secondary",
              }),
            )}
          >
            signup
          </Button>
        </header>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
