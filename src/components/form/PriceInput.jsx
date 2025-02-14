const PriceInput = ({ label, error, className = "", required, ...props }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <label className="block text-sm text-gray-700 font-medium h-5">
      {label}
      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
    <div className="h-10">
      <div
        className={`relative flex w-full h-full max-w-[300px] items-center rounded-md border ${
          error ? "border-red-500" : "border-gray-300"
        } bg-white`}
      >
        <div
          className={`absolute left-0 w-10 h-full flex items-center justify-center ${
            error ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-900"
          } rounded-l-md text-sm`}
        >
          $
        </div>
        <input
          {...props}
          className="w-full h-full bg-white text-gray-700 border-0 pl-12 pr-16 rounded focus:outline-none focus:ring-0 outline-none transition-all text-sm"
        />
        <div className="absolute right-3 text-gray-900 text-sm">USD</div>
      </div>
    </div>
    {error && <span className="text-xs text-red-500">{error}</span>}
  </div>
);
export default PriceInput;
