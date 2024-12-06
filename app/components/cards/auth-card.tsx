import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Link } from "react-router";

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  footer: string;
  changeHref: string;
};

export default function AuthCard({
  children,
  description,
  footer,
  title,
  changeHref,
}: AuthCardProps) {
  return (
    <Card className="w-full sm:w-[400px] md:w-[450px] lg:w-[480px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex items-center justify-center">
        <Link
          to={changeHref}
          className="underline text-sm font-medium underline-offset-4"
        >
          {footer}
        </Link>
      </CardFooter>
    </Card>
  );
}
