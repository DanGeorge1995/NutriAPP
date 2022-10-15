import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import type { RootState } from "../redux/store/store";

const useAuth = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logIn = (): any => dispatch(login());
  const logOut = (): any => dispatch(logout());

  return { isAuth, logIn, logOut };
};

export default useAuth;
