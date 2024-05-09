import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { buttonVariants } from "~/components/ui/button";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { api } from "~/trpc/server";
import { USDollar } from "~/utils/currencies";

export default async function ApplicationsPage() {
  const applications = await api.jobApplications.getAll();

  return (
    <div className="container">
      <div className="flex border-b pb-2">
        <h1 className="text-bold flex-1 justify-between text-2xl">
          Applications
        </h1>
        <Link
          className={`relative flex-row ${buttonVariants({ variant: "default" })}`}
          href="/applications/new"
        >
          <Plus />
        </Link>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {applications.map((application) => (
          <Card
            key={application.id}
            className="flex w-80 flex-col bg-secondary"
          >
            <CardHeader>
              <CardTitle>{application.company}</CardTitle>
              <CardDescription>{application.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <Link
                  href={application.jobDescriptionUrl ?? "#"}
                  className={`${buttonVariants({ variant: "outline" })}`}
                >
                  Job Description
                </Link>
              </p>
              <div className="mt-4 space-y-1">
                <p className="text-sm">Salary Range</p>
                <p>
                  {USDollar.format(application.salaryRangeLow ?? 0)}-
                  {USDollar.format(application.salaryRangeHigh ?? 0)}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link
                className={`w-full ${buttonVariants({ variant: "default" })}`}
                href={`/job/${application.id}`}
              >
                <Search className="mr-2 h-4 w-4" /> View
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
