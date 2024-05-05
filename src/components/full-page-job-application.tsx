import Link from "next/link";
import { getJobApplication } from "~/server/queries";
import { buttonVariants } from "./ui/button";

export default async function FullPageJobApplicationView(props: {
  id: number;
}) {
  const application = await getJobApplication(props.id);
  return (
    <div className="container flex h-full w-full items-center justify-center p-24 text-white">
      <div className="flex flex-shrink flex-grow items-center">
        <div className="">
          <h1 className="text-2xl font-bold">{application.company}</h1>
          <h2 className="text-xl font-semibold">{application.title}</h2>
        </div>
        <div className="ml-8 space-y-1">
          <p className="text-sm">Salary Range</p>
          <p>
            {application.salary_low}-{application.salary_high}
          </p>
        </div>
      </div>
      <div className="mx-8 flex h-full w-56 flex-shrink-0 flex-col border-l border-white">
        <Link
          href={application.job_description_url ?? "#"}
          className={`ml-8 ${buttonVariants({ variant: "default" })}`}
        >
          Visit Job Description
        </Link>
      </div>
    </div>
  );
}
