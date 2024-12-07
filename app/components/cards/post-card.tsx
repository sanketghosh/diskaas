import { HeartIcon, MessageSquareIcon } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import type { PostCardTypes } from "@/app/types";
import { formatNumber } from "@/app/utils/format-number";

type PostCardProps = {
  props: PostCardTypes;
};

export default function PostCard({ props }: PostCardProps) {
  const { username, title, description, comments, likes, id } = props;

  return (
    <div className="space-y-2 rounded-md border p-2.5">
      <p className="w-fit rounded-md border bg-secondary px-4 py-0.5 text-xs font-medium">
        {username}
      </p>
      <div>
        <h2 className="truncate text-sm font-medium sm:text-base">{title}</h2>
        <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
          {description}
        </p>
      </div>

      <div className="flex items-center space-x-3">
        <Button size={"sm"} variant={"secondary"}>
          <HeartIcon size={17} />
          {formatNumber(likes)}
        </Button>
        <Button size={"sm"} variant={"secondary"}>
          <MessageSquareIcon size={17} />
          {formatNumber(comments)}
        </Button>
      </div>
    </div>
  );
}
