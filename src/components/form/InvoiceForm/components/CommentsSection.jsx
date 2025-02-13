import { MessageSquareMoreIcon, SendHorizonal } from "lucide-react";

export const CommentsSection = ({ formik }) => (
  <section className="space-y-4">
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center rounded-full bg-blue-100 p-3">
        <MessageSquareMoreIcon size={20} className="text-blue-600" />
      </div>
      <h2 className="text-xl font-semibold">Comments</h2>
    </div>
    <div className="flex items-center gap-2 p-2 border border-gray-300 rounded-md bg-white">
      <input
        value={formik.values.comment}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name="comment"
        type="text"
        placeholder="Add a comment and use @Name to tag someone"
        className="flex-1 text-sm outline-none text-gray-600 placeholder-gray-400"
      />
      <SendHorizonal size={18} className="text-gray-500 cursor-pointer" />
    </div>
    {formik.touched.comment && formik.errors.comment && (
      <div className="text-red-500 text-sm">{formik.errors.comment}</div>
    )}
  </section>
);
