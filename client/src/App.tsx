import "./styles/global.scss";
// import useAuth from "./custom-hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "./redux/actions/user/registerAction";
import Register from "./pages/Register";

function App() {
  // @ts-ignore
  const { loading, error, userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    // @ts-ignore
    dispatch(registerUser({ email, password }));
  };

  return (
    <>
      <Register />
    </>
  );
}

export default App;
