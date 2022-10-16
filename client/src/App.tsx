import "./styles/global.scss";
// import useAuth from "./custom-hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "./redux/slices/user/userActions";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frontError, setFrontError] = useState("");
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
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {loading && <h1>Loading</h1>}
        <button type="submit" disabled={loading}>
          REGISTER
        </button>
      </form>
    </>
  );
}

export default App;
