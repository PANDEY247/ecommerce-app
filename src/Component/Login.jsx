import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("login");
    // navigate("/");
    console.log("logged out succesfully");
  };

  useEffect(() => {
    // console.log("useEffect hook is running");
    
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Login page</h1>
      <input type=" text " />
      <br />
      <input type=" text " />
      <br />
      <button onClick={handleLogin}>Login</button>
      <br />
      {localStorage.getItem("login") ? (
        <button onClick={handleLogout}>Logout</button>
      ) : null}
    </div>
  );
};
