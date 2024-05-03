import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import CreateApplicationForm from "./CreateApplicationForm";
import { getMyJobApplications } from "~/server/queries";
import { Button, buttonVariants } from "~/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default async function ApplicationsPage() {
  const applications = await getMyJobApplications();

  return (
    <>
      <div>
        <h1 className="text-bold text-2xl">Applications</h1>
        <CreateApplicationForm />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {applications.map((application) => (
          <Card key={application.id} className="flex w-80 flex-col">
            <CardHeader>
              <CardTitle>{application.company}</CardTitle>
              <CardDescription>{application.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <Link
                  href={application.job_description_url ?? "#"}
                  className={`${buttonVariants({ variant: "outline" })}`}
                >
                  Job Description
                </Link>
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm">Salary Range</p>
                <p>
                  {application.salary_low}-{application.salary_high}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Check className="mr-2 h-4 w-4" /> View
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
