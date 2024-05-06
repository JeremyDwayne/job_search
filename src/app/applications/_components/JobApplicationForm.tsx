"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { type z } from "zod";
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
import { JobApplicationSchema } from "~/server/db/schema";
import { insertJobApplication } from "~/server/queries";

export type JobApplicationFormFields = z.infer<typeof JobApplicationSchema>;

export default function JobApplicationForm() {
  const form = useForm<JobApplicationFormFields>({
    resolver: zodResolver(JobApplicationSchema),
    defaultValues: {
      company: "",
      title: "",
      jobDescriptionUrl: "",
      salaryRangeLow: 0,
      salaryRangeHigh: 0,
    },
  });

  const onSubmit: SubmitHandler<JobApplicationFormFields> = async (data) => {
    try {
      await insertJobApplication(data);
      toast("Job Application Created");
    } catch (error) {
      form.setError("root", {
        message: "Application unable to be saved",
      });
    }
  };
  return (
    <div>
      <h1 className="font-2xl font-bold">New Job Application</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="jobDescriptionUrl"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Job Description URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <div className="flex items-center">
            <div className="flex-1">
              <FormField
                control={form.control}
                name="salaryRangeLow"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range Low End</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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
                name="salaryRangeHigh"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary Range High End</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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
