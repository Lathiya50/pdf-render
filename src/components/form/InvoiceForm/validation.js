import * as Yup from "yup";

export const validationSchema = Yup.object({
  vendor: Yup.string().required("Vendor is required"),
  poNumber: Yup.string().required("Purchase Order Number is required"),
  invoiceNumber: Yup.string().required("Invoice Number is required"),
  invoiceDueDate: Yup.date().required("Invoice Due Date is required"),
  totalAmount: Yup.number()
    .required("Total Amount is required")
    .min(0, "Amount must be positive"),
  paymentTerms: Yup.string().required("Payment Terms are required"),
  invoiceDate: Yup.date().required("Invoice Date is required"),
  glPostDate: Yup.date().required("GL Post Date is required"),
  invoiceDescription: Yup.string()
    .required("Invoice Description is required")
    .min(10, "Description must be at least 10 characters"),
  expenseCodes: Yup.array().of(
    Yup.object({
      lineAmount: Yup.number().required("Line amount is required").min(0),
      department: Yup.string().required("Department is required"),
      account: Yup.string().required("Account is required"),
      location: Yup.string().required("Location is required"),
      expenseDescription: Yup.string().required("Description is required"),
    })
  ),
  comment: Yup.string()
    .required("Comment is required")
    .min(10, "Comment must be at least 10 characters"),
});
