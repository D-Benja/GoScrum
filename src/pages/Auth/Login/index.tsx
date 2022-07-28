import { useState } from "react";
import { Credentials } from "../models";
import { useFormik } from "formik";
import Input from "../Layout/Input";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const index = () => {
  const [credentials, _setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const validateValues = {
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: credentials,
    validationSchema: Yup.object(validateValues),
    onSubmit: (_values) => {
      localStorage.setItem("token", "13fbc-token");

      navigate("/", { replace: true });
    },
  });

  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <form onSubmit={formik.handleSubmit}>
        <h1 className="mb-10 text-3xl">Log in</h1>
        <div className="mb-6 flex flex-col">
          <Input
            inputId="email"
            label="Email"
            handler={formik.handleChange}
            type="email"
            onBlurHandler={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm text-red-600">* {formik.errors.email}</div>
          )}
        </div>

        <div className="mb-6 flex flex-col">
          <Input
            inputId="password"
            label="Password"
            handler={formik.handleChange}
            type="password"
            onBlurHandler={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm text-red-600">
              * {formik.errors.password}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg border bg-deep_orange/75 p-1 text-white"
        >
          Log in
        </button>
      </form>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
