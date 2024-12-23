import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const contactFormSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"), 
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("must be a valid email").required("Email is required"),
  mobile: yup.string().required("Mobile Number is required").matches(phoneRegExp, "Phone number is not valid"),
  productInquiries: yup
    .array()
    .of(yup.string().required("Product Inquiry is required"))
});
