import CreateApplicationForm from "./CreateApplicationForm";
import { getJobApplications } from "~/server/queries";

export default async function ApplicationsPage() {
  const applications = await getJobApplications();

  return (
    <div className="mt-0 pt-0">
      <h1 className="text-2xl">Applications</h1>
      <hr />
      <CreateApplicationForm />
      <hr />
      {applications.map((application) => (
        <div key={application.id}>
          <span>{application.title}</span>
          <span>{application.company}</span>
          <span>
            <a href={application.job_description_url ?? "#"}>Job Description</a>
          </span>
          <span>
            {application.salary_low}-{application.salary_high}
          </span>
        </div>
      ))}
    </div>
  );
}
