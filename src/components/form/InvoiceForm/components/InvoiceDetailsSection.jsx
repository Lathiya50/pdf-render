import { BookmarkIcon } from "lucide-react";
import {
  PURCHASE_ORDER_OPTIONS,
  INVOICE_NUMBER_OPTIONS,
  PAYMENT_TERMS_OPTIONS,
} from "../constant";
import FormSelect from "../../FormSelect";
import FormInput from "../../FormInput";
import PriceInput from "../../PriceInput";

export const InvoiceDetailsSection = ({ formik }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-blue-100 p-3">
        <BookmarkIcon size={20} className="text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold">Invoice Details</h2>
    </div>

    <FormSelect
      label="Purchase Order Number"
      name="poNumber"
      value={formik.values.poNumber}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      options={PURCHASE_ORDER_OPTIONS}
      error={formik.touched.poNumber && formik.errors.poNumber}
      required
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormSelect
        label="Invoice Number"
        name="invoiceNumber"
        value={formik.values.invoiceNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        options={INVOICE_NUMBER_OPTIONS}
        error={formik.touched.invoiceNumber && formik.errors.invoiceNumber}
        required
      />

      <FormInput
        label="Invoice Date"
        type="date"
        name="invoiceDate"
        value={formik.values.invoiceDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.invoiceDate && formik.errors.invoiceDate}
        required
      />

      <PriceInput
        label="Total Amount"
        name="totalAmount"
        value={formik.values.totalAmount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.totalAmount && formik.errors.totalAmount}
        required
      />

      <FormSelect
        label="Payment Terms"
        name="paymentTerms"
        value={formik.values.paymentTerms}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        options={PAYMENT_TERMS_OPTIONS}
        error={formik.touched.paymentTerms && formik.errors.paymentTerms}
        required
      />

      <FormInput
        label="Invoice Due Date"
        type="date"
        name="invoiceDueDate"
        value={formik.values.invoiceDueDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.invoiceDueDate && formik.errors.invoiceDueDate}
        required
      />

      <FormInput
        label="GL Post Date"
        type="date"
        name="glPostDate"
        value={formik.values.glPostDate}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.glPostDate && formik.errors.glPostDate}
        required
      />

      <div className="col-span-full">
        <FormInput
          label="Invoice Description"
          name="invoiceDescription"
          value={formik.values.invoiceDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.invoiceDescription &&
            formik.errors.invoiceDescription
          }
          required
        />
      </div>
    </div>
  </section>
);
