import React, { useState, useCallback } from "react";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useLocalStorage } from "./useLocalStorage";
import { usePDFHandling } from "./usePDFHandling";
import { INITIAL_VALUES } from "../components/form/InvoiceForm/constant";
import { validationSchema } from "../components/form/InvoiceForm/validation";
import { savePDFToLocalStorage } from "../lib/function";
import InvoicePDF from "../components/InvoicePDF";
import { pdf } from "@react-pdf/renderer";

export const useInvoiceForm = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const { handlePDFUpload } = usePDFHandling();
  const { saveFormData, loadFormData } = useLocalStorage();

  const formik = useFormik({
    initialValues: loadFormData() || INITIAL_VALUES,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await saveFormData(values);
        toast.success("Form submitted successfully!");
        await populateDummyData(values);
      } catch (error) {
        toast.error("Error saving form data!");
      }
    },
  });

  const handleFileUpload = useCallback(
    async (file) => {
      try {
        const uploadedFile = await handlePDFUpload(file);
        await savePDFToLocalStorage(uploadedFile);
        setPdfFile(uploadedFile);
        toast.success("PDF uploaded successfully!");
      } catch (error) {
        toast.error(error.message);
      }
    },
    [handlePDFUpload]
  );

  const populateDummyData = useCallback(
    async (data) => {
      if (!data) return;
      try {
        const element = React.createElement(InvoicePDF, { data });

        const dummyPDFBlob = await pdf(element).toBlob();
        await savePDFToLocalStorage(dummyPDFBlob);
        setPdfFile(dummyPDFBlob);
        await saveFormData(data);

        toast.success("Dummy data populated successfully!");
      } catch (error) {
        toast.error("Error generating dummy PDF!");
        console.error("Error generating dummy PDF:", error);
      }
    },
    [formik]
  );

  return {
    formik,
    pdfFile,
    setPdfFile,
    handleFileUpload,
    populateDummyData,
  };
};
