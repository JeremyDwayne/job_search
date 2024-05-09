import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { api } from "~/trpc/server";
import { redirect } from "next/navigation";
import { USDollar } from "~/utils/currencies";

export default async function FullPageJobApplicationView(props: {
  id: number;
}) {
  const application = await api.jobApplications.getById(props.id);
  if (!application) {
    redirect("/applications");
  }

  return (
    <div className="container flex h-full w-full items-center justify-center bg-secondary p-24 text-white">
      <div className="flex flex-shrink flex-grow items-center">
        <div className="">
          <h1 className="text-2xl font-bold">{application.company}</h1>
          <h2 className="text-xl font-semibold">{application.title}</h2>
        </div>
        <div className="ml-8 space-y-1">
          <p className="text-sm">Salary Range</p>
          <p>
            {USDollar.format(application.salaryRangeLow ?? 0)}-
            {USDollar.format(application.salaryRangeHigh ?? 0)}
          </p>
        </div>
      </div>
      <div className="mx-8 flex h-full w-56 flex-shrink-0 flex-col border-l border-white">
        <div className="ml-8 p-2">
          <Link
            href={application.jobDescriptionUrl ?? "#"}
            className={`${buttonVariants({ variant: "default" })}`}
          >
            Visit Job Description
          </Link>
        </div>

        <div className="ml-8 flex items-center gap-2 p-2">
          <form
            action={async () => {
              "use server";
              await api.jobApplications.archive({ id: props.id });
              redirect("/applications");
            }}
          >
            <Button type="submit" variant="warning">
              Archive
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await api.jobApplications.delete({ id: props.id });
              redirect("/applications");
            }}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
