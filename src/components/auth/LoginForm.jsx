import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const LoginForm = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .matches(
        /^[a-zA-Z0-9_-]+$/,
        "Username can only contain letters, numbers, underscores and hyphens"
      )
      .required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      try {
        //  display loading state for 1 second
        setTimeout(() => {
          login(values);
        }, 1000);
      } catch (error) {
        console.error("Login failed:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const getInputClassName = (fieldName) => `
  w-full px-4 py-2 md:py-2.5 text-base text-gray-800 
  border rounded-xl transition-all duration-200
  ${
    formik.touched[fieldName] && formik.errors[fieldName]
      ? "border-red-500 focus:border-red-500 focus:ring-red-200"
      : formik.touched[fieldName] && !formik.errors[fieldName]
      ? "border-green-500 focus:border-green-500 focus:ring-green-200"
      : "border-gray-200 focus:border-blue-500 focus:ring-blue-200"
  }
  focus:ring-2 focus:outline-none
`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 md:p-6 lg:p-8">
      <div className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] flex flex-col bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="flex flex-col gap-2 items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Welcome Back
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
          {/* Input Fields Container */}
          <div className="flex flex-col gap-4">
            {/* Username Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="username"
                className="text-sm md:text-base font-semibold text-gray-800"
              >
                Username
              </label>
              <div className="flex flex-col gap-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  {...formik.getFieldProps("username")}
                  className={getInputClassName("username")}
                  placeholder="Enter your username"
                  autoComplete="username"
                />
                {formik.touched.username && formik.errors.username && (
                  <div className="text-red-500 text-xs md:text-sm">
                    {formik.errors.username}
                  </div>
                )}
              </div>
            </div>
            {/* Password Field */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-sm md:text-base font-semibold text-gray-800"
              >
                Password
              </label>
              <div className="flex flex-col gap-1">
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    {...formik.getFieldProps("password")}
                    className={getInputClassName("password")}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                  />
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="stroke-current" />
                    ) : (
                      <Eye size={20} className="stroke-current" />
                    )}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-xs md:text-sm">
                    {formik.errors.password}
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="flex flex-row flex-wrap items-center justify-end gap-3">
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting || !formik.isValid}
            className={`!bg-blue-500
    w-full px-4 py-3 md:py-4 text-base font-medium text-white rounded-xl 
    transition-all duration-200 shadow-sm hover:shadow-md`}
          >
            {formik.isSubmitting ? "Signing in..." : "Sign in"}
          </button>
          {/* Sign Up Link */}
          <div className="flex justify-center items-center">
            <p className="text-sm md:text-base text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
