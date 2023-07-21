import Home from "@/pages";
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import Link from "next/link";

function shopListing() {
  const shopListingSchema = Yup.object().shape({
    FullName: Yup.string()
    .required("Full Name is a required field"),

    email: Yup.string()
    // Format Validation
    .email("Invalid email address")
    // Required Field Validation
    .required("Email is a required field")

    .min(5, "Must be more than 8 characters"),

  // Error messages
  // .matches('@', "Must include @ !"),

  password: Yup.string()
    .required("Password is a required field")
    // check minimum characters
    .min(8, "Password must have at least 8 characters")
    // Error messages for requirements
    .matches(/[0-9]/, "Must include a digit!"),
  });
  return (
    <>
      <Header />
      <Navbar />

      <h1 className="text-center mt-12 text-3xl text-gray-900 font-bold"> Seller Application</h1>

      <div className="container  bg-gray-100 text-gray-900 flex flex-row min-h-screen  w-full justify-center items-center">
      <Formik
            initialValues={{
              phoneNumber: "",
              password: "",
            }}
            validationSchema={shopListingSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="h-5/6 w-11/12 bg-gray-200 bg-opacity-30 rounded-md shadow-md py-16 my-3 px-6 mb-20">
                {/* <label for="firstName">First Name*</label> */}
              

                <h1 className="text-xl text-gray-900 mt-3 font-semibold">Seller Information:</h1>
              <p className="mt-2 text-base text-gray-400">Fill the form below or write us .We will help you as soon as possible.</p>



              
                <Field
                  className="w-full px-8 py-4 mt-4 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                  name="FullName"
                  placeholder="Your full Name"
                />
                {errors.FullName && touched.FullName ? (
                  <div className="mt-1 text-xs text-red-400">{errors.FullName}</div>
                ) : null}

              

                <Field
                  className="w-full px-8 py-4 mt-1 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </div>
                ) : null}


                <Field
                  className="w-full px-8 py-4 focus:border-yellow-500 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-8"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.password}
                  </div>
                ) : null}


                <Field
                  className="w-full px-8 py-4 focus:border-yellow-500 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-8"
                  name="password"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.password && touched.password ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.password}
                  </div>
                ) : null}


              <hr className="mt-8 bg-slate-900 " />

              <h1 className="text-xl text-gray-900 mt-4 font-semibold">Shop Information:</h1>
              <p className="mt-2 text-base text-gray-400">Fill the form below or write us .We will help you as soon as possible.</p>



                <button
                  className="mt-9 tracking-wide font-bold bg-yellow-500 text-gray-800 w-full py-4 rounded-lg hover:bg-gray-800  hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
              
                  <span class="ml-3">Create seller account</span>
                </button>


              

                <p className="text-center mt-7 text-gray-500">
                  Already have an account ?{" "}
                  <Link
                    className="ml-1 text-slate-800 font-medium"
                    href="/auth/Login"
                  >
                  Login{" "}
                  </Link>
                </p>



               

             
              </Form>
            )}
          </Formik>

      </div>
    </>
  );
}

export default shopListing;
