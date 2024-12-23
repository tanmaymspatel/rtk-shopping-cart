import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { contactFormSchema } from "../utility/validations/contactForm.validations";

const Contact = () => {
  return (
    <div className="container-box py-8">
      <h2 className="my-6 text-center uppercase text-xl font-semibold">
        Contact Us
      </h2>
      <div className="w-[800px] mx-auto">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            productInquiries: [""],
          }}
          validationSchema={contactFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <div className="bg-slate-200 px-6 py-8 rounded-md">
              <Form>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="">First Name</label>
                      <Field name="firstName">
                        {({ field, form, meta }: any) => {
                          return (
                            <div>
                              <input
                                className="w-full p-2 rounded-md"
                                type="text"
                                placeholder="Enter First Name"
                                {...field}
                              />
                              {meta.touched && meta.error && (
                                <div className="text-red-600">{meta.error}</div>
                              )}
                            </div>
                          );
                        }}
                      </Field>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="">Last Name</label>
                      <Field
                        type="text"
                        name="lastName"
                        className="w-full p-2 rounded-md"
                        placeholder="Enter Last Name"
                      />

                      {/* {errors.lastName && touched.lastName &&<div className="text-red-600">{errors.lastName}</div>} */}
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="">Email</label>
                      <Field
                        type="email"
                        name="email"
                        className="w-full p-2 rounded-md"
                        placeholder="Enter Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="">Mobile Number</label>
                      <Field
                        type="text"
                        name="mobile"
                        className="w-full p-2 rounded-md"
                        placeholder="Enter Mobile Number"
                      />
                      <ErrorMessage
                        name="mobile"
                        component="div"
                        className="text-red-600"
                      />
                    </div>
                  </div>

                  {/* Qualifications  */}
                  <div className="space-y-1">
                    <label htmlFor="">Product Inquiries</label>
                    <FieldArray
                      name="productInquiries"
                      render={(arrayHelpers) => (
                        <div>
                          {values.productInquiries &&
                          values.productInquiries.length > 0 ? (
                            values.productInquiries.map((_, index) => (
                              <div key={index} className="mb-4">
                                <div>
                                  <Field
                                    name={`productInquiries.${index}`}
                                    className="w-[87%] p-2 rounded-md"
                                    placeholder="Enter Your Product Inquiries"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                    className={`${
                                      values.productInquiries.length === 1
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-red-800"
                                    } px-4 py-2  text-white mx-2 rounded-md`}
                                    disabled={
                                      values.productInquiries.length === 1
                                    }
                                  >
                                    -
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      arrayHelpers.insert(index, "")
                                    } // insert an empty string at a position
                                    className="px-4 py-2 bg-blue-800 text-white rounded-md"
                                  >
                                    +
                                  </button>
                                </div>
                                <ErrorMessage
                                  name={`productInquiries.${index}`}
                                  component="div"
                                  className="text-red-600"
                                />
                              </div>
                            ))
                          ) : (
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                              className="bg-blue-800 text-white text-sm px-4 py-2 rounded-md my-4"
                            >
                              {/* show this when user has removed all productInquiries from the list */}
                              Add a Qualification
                            </button>
                          )}
                        </div>
                      )}
                    />
                  </div>

                  <div className="flex justify-end mt-3 gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-red-800 text-white text-sm px-4 py-2 rounded-md "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue-800 text-white text-sm px-4 py-2 rounded-md "
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
              {JSON.stringify(errors)}
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
