import React, { useEffect } from "react";
import { PDFPreview } from "./components/PDFPreview";
import { VendorSection } from "./components/VendorSection";
import { InvoiceDetailsSection } from "./components/InvoiceDetailsSection";
import { ExpenseSection } from "./components/ExpenseSection";
import { CommentsSection } from "./components/CommentsSection";
import { ActionButtons } from "./components/ActionButtons";
import { useInvoiceForm } from "../../../hooks/useInvoiceForm";
import { loadPDFFromLocalStorage } from "../../../lib/function";

const InvoiceForm = () => {
  const {
    formik,
    pdfFile,
    setPdfFile,
    handleFileUpload,
    handleAddExpenseCode,
    handleRemoveExpenseCode,
    populateDummyData,
  } = useInvoiceForm();

  useEffect(() => {
    const loadSavedPDF = async () => {
      const savedPDF = await loadPDFFromLocalStorage();
      if (savedPDF) {
        setPdfFile(savedPDF);
      }
    };

    loadSavedPDF();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="flex flex-col lg:flex-row gap-6">
        <PDFPreview pdfFile={pdfFile} onFileUpload={handleFileUpload} />

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full lg:w-1/2 space-y-8"
        >
          <VendorSection formik={formik} />
          <InvoiceDetailsSection formik={formik} />
          <ExpenseSection
            formik={formik}
            onAddExpense={handleAddExpenseCode}
            onRemoveExpense={handleRemoveExpenseCode}
          />
          <CommentsSection formik={formik} />
          <ActionButtons formik={formik} onPopulateDummy={populateDummyData} />
        </form>
      </div>
    </div>
  );
};

export default InvoiceForm;
