import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

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
          className="text-sm font-medium underline underline-offset-4"
        >
          {footer}
        </Link>
      </CardFooter>
    </Card>
  );
}
