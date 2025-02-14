const FormSelect = ({
  label,
  options,
  error,
  className = "",
  required,
  ...props
}) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="block text-sm text-gray-700 font-medium h-5">
      {label}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
    <div className="h-10">
      <select
        {...props}
        className={`w-full h-full text-sm bg-white border ${
          error ? "border-red-500" : "border-gray-300"
        } px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
export default FormSelect;
