"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateApplicationForm() {
  const router = useRouter();
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsPending(true);

    const application = {
      company,
      title,
      url,
    };
  };

  return (
    <div>
      <form className="w-100">
        <label className="input input-bordered flex items-center gap-2">
          <span>Company:</span>
          <input
            required
            type="text"
            className="grow"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span>Title:</span>
          <input
            required
            type="text"
            className="grow"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <span>URL:</span>
          <input
            required
            type="text"
            className="grow"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </label>
        <button
          type="submit"
          className="btn form-control btn-wide grow"
          disabled={isPending}
        >
          {isPending ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            <span>Submit</span>
          )}
        </button>
      </form>
    </div>
  );
}
