import { DUMMY_DATA } from "../constant";

export const ActionButtons = ({ formik, onPopulateDummy }) => (
  <div className="flex justify-end gap-4">
    <button
      type="button"
      onClick={() => {
        formik.setValues(DUMMY_DATA);
        onPopulateDummy(DUMMY_DATA);
      }}
      className="btn btn-primary"
    >
      Populate with Dummy Data
    </button>
    <button
      type="button"
      className="btn btn-secondary !cursor-not-allowed"
      disabled
    >
      Save as Draft
    </button>
    <button
      type="submit"
      disabled={!formik.isValid || formik.isSubmitting}
      className="btn btn-primary"
    >
      Submit & New
    </button>
  </div>
);
