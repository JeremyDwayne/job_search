import FullPageJobApplicationView from "~/components/full-page-job-application";

export default async function JobPage({
  params: { id: applicationId },
}: {
  params: { id: string };
}) {
  const appId = Number(applicationId);
  if (Number.isNaN(appId)) throw new Error("Invalid application id");

  return <FullPageJobApplicationView id={appId} />;
}
