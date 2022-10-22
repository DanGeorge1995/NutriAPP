import { useDispatch, useSelector } from "react-redux";
import { setConfirmPassword, setEmail, setPassword } from "../../redux/slices/user/userSlice";
import { registerUser } from "../../redux/actions/user/registerAction";
import Input from "../Inputs";

interface FormProps {
  type: string;
}

const Form = (props: FormProps) => {
  const { type } = props;
  // @ts-ignore
  const { loading, error, email, password, confirmPassword, userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    console.log("TEST");
    // @ts-ignore
    dispatch(registerUser({ email, password }));
  };

  return (
    <form>
      {type === "register" && (
        <>
          {/* @ts-ignore */}
          <Input type="email" placeholder="Email" label="Email" id="register-email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
          {/* @ts-ignore */}
          <Input type="password" placeholder="Password" label="Password" id="register-password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
          {/* @ts-ignore */}
          <Input type="password" placeholder="Confirm password" label="Confirm password" id="register-confirm" value={confirmPassword} onChange={(e) => dispatch(setConfirmPassword(e.target.value))} />
          <button type="submit" onClick={handleSubmit}>
            REGISTER
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
