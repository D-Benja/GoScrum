import { useState } from "react";
import { useFormik } from "formik";
import { User } from "../models";
import Input from "../Layout/Input";
import Select from "../Layout/Select";
import { handleOptions } from "./utils";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export const index = () => {
  const [credentials, _setCredentials] = useState<User>({
    uuid: "",
    username: "",
    email: "",
    password: "",
    role: "",
    continent: "",
    region: "",
  });

  const validateValues = {
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("Role is required"),
    continent: Yup.string().required("Continent is required"),
    region: Yup.string().required("Region is required"),
  };

  const formik = useFormik({
    initialValues: credentials,
    validationSchema: Yup.object(validateValues),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container mx-auto flex h-[100vh] flex-col items-center justify-center ">
      <div className="absolute left-10 top-10 flex text-lg font-bold">
        <p className="text-orange-500">Go</p>
        <p className=" opacity-70">Scrum</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <h1 className="mb-10 text-3xl">Register</h1>
        <div className="mb-6">
          <Input
            type="text"
            label="Username"
            inputId="username"
            handler={formik.handleChange}
          />
          {formik.errors.username && formik.touched.username && (
            <div className="text-sm text-red-600">
              * {formik.errors.username}
            </div>
          )}
        </div>
        <div className="mb-6">
          <Input
            type="email"
            label="Email"
            inputId="email"
            handler={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm text-red-600">* {formik.errors.email}</div>
          )}
        </div>
        <div className="mb-6">
          <Input
            type="password"
            label="Password"
            inputId="password"
            handler={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="text-sm text-red-600">
              * {formik.errors.password}
            </div>
          )}
        </div>
        <div className="mb-6">
          <Select
            label="Role"
            inputId="role"
            handler={formik.handleChange}
            options={handleOptions("role")}
            defaultValue={"Select a Role"}
          />
          {formik.errors.role && formik.touched.role && (
            <div className="text-sm text-red-600">* {formik.errors.role}</div>
          )}
        </div>
        <div className="mb-6">
          <Select
            label="Continent"
            inputId="continent"
            handler={formik.handleChange}
            options={handleOptions("continent")}
            defaultValue={"Select a continent"}
          />
          {formik.errors.continent && formik.touched.continent && (
            <div className="text-sm text-red-600">
              * {formik.errors.continent}
            </div>
          )}
        </div>
        <div className="mb-6">
          <Select
            label="Region"
            inputId="region"
            handler={formik.handleChange}
            options={handleOptions("region")}
            defaultValue={"Select a region"}
          />
          {formik.errors.region && formik.touched.region && (
            <div className="text-sm text-red-600">* {formik.errors.region}</div>
          )}
        </div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-lg border bg-orange-400/95 p-1 text-white"
        >
          Sign In
        </button>
      </form>
      <div className="mt-8 flex flex-col items-center">
        <p className="text-center text-gray-500">
          If you have a account, please{" "}
          <Link to="/login" className="text-orange-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
