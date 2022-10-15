import "./styles/global.scss";
import useAuth from "./custom-hooks/useAuth";

function App() {
  const { isAuth, logIn, logOut } = useAuth();

  return (
    <>
      <div>
        <div>
          {!isAuth && <button onClick={logIn}>LOGIN</button>}
          <span>{isAuth ? "LOGED ID" : "LOGED OUT"}</span>
          {isAuth && <button onClick={logOut}>LOGOUT</button>}
        </div>
      </div>
    </>
  );
}

export default App;
