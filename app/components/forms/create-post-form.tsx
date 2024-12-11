// packages
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Loader2Icon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

// local modules
import { CreatePostSchema } from "@/app/schemas";

// components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";

export default function CreatePostForm() {
  const form = useForm<z.infer<typeof CreatePostSchema>>({
    resolver: zodResolver(CreatePostSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  //   const mutation = useMutation({});

  const formSubmitHandler = async (
    values: z.infer<typeof CreatePostSchema>,
  ) => {
    console.log(values);
  };

  const loading = false;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(formSubmitHandler)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="This is just a post title"
                    type="text"
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="This is just a small description about the post which we will need."
                    disabled={loading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button className="mt-4 w-full" disabled={loading}>
          {loading ? <Loader2Icon className="animate-spin" /> : "Post"}
        </Button>
      </form>
    </Form>
  );
}
