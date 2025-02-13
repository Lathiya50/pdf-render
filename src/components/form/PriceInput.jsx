const PriceInput = ({ label, error, className = "", required, ...props }) => {
  return (
    <div className="form-group col-span-1">
      <label className="form-label" htmlFor="line-amount">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="relative flex w-full max-w-[300px] items-center rounded-md border border-gray-300 bg-white">
        <div className="absolute left-0 w-10 h-full flex items-center justify-center bg-gray-100 text-gray-900 rounded-l-md text-sm">
          $
        </div>
        <input
          {...props}
          className={`w-full bg-white text-gray-700 border ${
            error ? "border-red-500 " : "border-gray-300"
          } pl-12 pr-16 py-2 rounded focus:outline-none focus:ring-0 outline-none transition-all`}
        />
        <div className="absolute right-3 text-gray-900 text-sm">USD</div>
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
export default PriceInput;
