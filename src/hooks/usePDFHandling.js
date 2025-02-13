import { useCallback } from "react";
import { savePDFToLocalStorage } from "../lib/function";

export const usePDFHandling = () => {
  const handlePDFUpload = useCallback(async (file) => {
    if (!file) {
      throw new Error("No file provided");
    }

    if (file.type !== "application/pdf") {
      throw new Error("Please upload a valid PDF file!");
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new Error("File size must be less than 5MB!");
    }

    await savePDFToLocalStorage(file);
    return file;
  }, []);

  return { handlePDFUpload };
};
