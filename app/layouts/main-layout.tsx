import { QuoteIcon } from "lucide-react";
import { Link, Outlet } from "react-router";
import { Button, buttonVariants } from "../components/ui/button";
import { cn } from "../lib/utils";

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
      <div className="max-w-4xl mx-auto">
        <header className="bg-orange-500 py-3 flex items-center px-4 justify-between">
          <nav className="md:space-x-6 flex flex-col md:flex-row md:items-center">
            <Link
              to={"/"}
              className="font-semibold flex items-center gap-0.5 text-lg"
            >
              <div className="size-5 text-orange-500 flex items-center bg-foreground justify-center">
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
              })
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
