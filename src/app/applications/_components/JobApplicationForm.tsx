"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
// import { insertJobApplication } from "~/server/queries";

export const jobApplicationValidator = z.object({
  company: z.string().min(2),
  title: z.string().min(2),
  job_description_url: z.string(),
  salary_low: z.number(),
  salary_high: z.number(),
});

export default function JobApplicationForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof jobApplicationValidator>>({
    resolver: zodResolver(jobApplicationValidator),
    defaultValues: {
      company: "",
      title: "",
      job_description_url: "",
      salary_low: 0,
      salary_high: 0,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof jobApplicationValidator>) {
    // await insertJobApplication(values);
    console.log(values);
    toast("Job Application Created");
  }
  return (
    <div>
      <h1 className="font-2xl font-bold">New Job Application</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="job_description_url"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="salary_low"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range Low End</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <span className="mx-2 translate-y-4">-</span>
            <div className="flex-1">
              <FormField
                control={form.control}
                name="salary_high"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range High End</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
