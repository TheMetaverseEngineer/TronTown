import * as Yup from "yup";

const schema = Yup.object({
  name: Yup.string().required("name is required"),
  username: Yup.string()
    .required("username is required")
    .min(4, "username must be at least 4 characters long")
    .matches(/^[A-z\d]{4,}$/, "username must be alphanumeric"),
  email: Yup.string().required("email is required").email("email is not valid"),
  wallet_address: Yup.string().required("wallet_address is required"),
});

export default schema;
