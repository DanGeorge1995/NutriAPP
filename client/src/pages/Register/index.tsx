import Form from "../../components/Forms";

const FORM_TYPES = {
  Register: "register",
  Login: "login",
};

const Register = () => {
  return <Form type={FORM_TYPES.Register} />;
};

export default Register;
