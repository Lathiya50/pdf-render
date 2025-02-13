import { Plus } from "lucide-react";
import {
  DEPARTMENT_OPTIONS,
  ACCOUNT_OPTIONS,
  LOCATION_OPTIONS,
} from "../constant";
import FormSelect from "../../FormSelect";
import PriceInput from "../../PriceInput";
import React from "react";
import FormInput from "../../FormInput";

export const ExpenseSection = ({ formik, onAddExpense, onRemoveExpense }) => (
  <section className="space-y-4">
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold text-gray-800">Expense Details</h2>
      <div className="flex items-center space-x-2">
        <span className="text-gray-800">$ 0.00</span>
        <span className="text-gray-500">/</span>
        <span className="text-blue-500">$ 0.00</span>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {formik.values.expenseCodes.map((code, index) => (
        <React.Fragment key={index}>
          <PriceInput
            label="Line Amount"
            name={`expenseCodes.${index}.lineAmount`}
            value={formik.values.expenseCodes[index].lineAmount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.expenseCodes?.[index]?.lineAmount &&
              formik.errors.expenseCodes?.[index]?.lineAmount
            }
            required
          />
          <FormSelect
            label="Department"
            name={`expenseCodes.${index}.department`}
            value={formik.values.expenseCodes[index].department}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={DEPARTMENT_OPTIONS}
            error={
              formik.touched.expenseCodes?.[index]?.department &&
              formik.errors.expenseCodes?.[index]?.department
            }
            required
          />
          <FormSelect
            label="Account"
            name={`expenseCodes.${index}.account`}
            value={formik.values.expenseCodes[index].account}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={ACCOUNT_OPTIONS}
            error={
              formik.touched.expenseCodes?.[index]?.account &&
              formik.errors.expenseCodes?.[index]?.account
            }
            required
          />
          <FormSelect
            label="Location"
            name={`expenseCodes.${index}.location`}
            value={formik.values.expenseCodes[index].location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            options={LOCATION_OPTIONS}
            error={
              formik.touched.expenseCodes?.[index]?.location &&
              formik.errors.expenseCodes?.[index]?.location
            }
            required
          />
          <div className="col-span-full">
            <FormInput
              label="Description"
              name={`expenseCodes.${index}.expenseDescription`}
              value={formik.values.expenseCodes[index].expenseDescription}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.expenseCodes?.[index]?.expenseDescription &&
                formik.errors.expenseCodes?.[index]?.expenseDescription
              }
              required
            />
          </div>
          {index > 0 && (
            <button
              type="button"
              onClick={() => onRemoveExpense(index)}
              className="w-max btn btn-secondary"
            >
              Remove Expense
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onAddExpense}
        className="flex items-center gap-1 w-max text-sm !bg-white text-gray-700 px-4 py-2 rounded border border-gray-700"
      >
        <Plus size={18} className="mr-2 text-gray-900" />
        Add Expense
      </button>
    </div>
  </section>
);
