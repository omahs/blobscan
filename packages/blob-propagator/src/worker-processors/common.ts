import { createOrLoadBlobStorageManager } from "@blobscan/blob-storage-manager";
import type { BlobStorage } from "@blobscan/db";

import { readBlobDataFile } from "../blob-data-file";

export async function propagateBlob(
  versionedHash: string,
  targetStorage: BlobStorage
) {
  const blobStorageManager = await createOrLoadBlobStorageManager();
  const blobData = await readBlobDataFile(versionedHash);

  const result = await blobStorageManager.storeBlob(
    {
      data: blobData,
      versionedHash,
    },
    {
      storages: [targetStorage],
    }
  );

  const storageRef = result.references[0];

  if (!storageRef) {
    throw new Error(
      `Blob reference missing when storing ${versionedHash} in ${targetStorage}`
    );
  }

  return storageRef;
}
