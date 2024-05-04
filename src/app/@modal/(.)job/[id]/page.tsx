import { Modal } from "~/app/_components/modal";
import FullPageJobApplicationView from "~/components/full-page-job-application";

export default async function ApplicationModal({
  params: { id: applicationId },
}: {
  params: { id: string };
}) {
  const appId = Number(applicationId);
  if (Number.isNaN(appId)) throw new Error("Invalid application id");

  return (
    <Modal>
      <FullPageJobApplicationView id={appId} />
    </Modal>
  );
}
