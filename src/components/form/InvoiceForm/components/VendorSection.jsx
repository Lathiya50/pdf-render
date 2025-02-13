import { Building2 } from "lucide-react";
import { VENDOR_INFO_OPTIONS } from "../constant";
import FormSelect from "../../FormSelect";

export const VendorSection = ({ formik }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-blue-100 p-3">
        <Building2 size={20} className="text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold">Vendor Details</h2>
    </div>

    <FormSelect
      label="Vendor Information"
      name="vendor"
      value={formik.values.vendor}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      options={VENDOR_INFO_OPTIONS}
      error={formik.touched.vendor && formik.errors.vendor}
      required
    />
  </section>
);
