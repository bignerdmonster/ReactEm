"use client";

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export default function UploadThangButton({className = ""}) {
  const router = useRouter();
  return (
      <UploadButton className={className}
        endpoint="imageUploader"
    onClientUploadComplete={(res) => {
      // Do something with the response
        console.log("Files: ", res);
        router.refresh();
    }}
    onUploadError={(error: Error) => {
        // Do something with the error.
        alert(`ERROR! ${error.message}`);
    }}
    />
  );
}
