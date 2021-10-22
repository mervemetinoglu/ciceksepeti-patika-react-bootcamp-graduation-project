import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import Form from "../../components/AuthForm/Form";
import { getToken } from "../../helpers/auth";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const login = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    const condition = login.token?.length;
    if (condition) history.push("/");
  }, [history, login.token?.length]);

  return (
    <AuthContainer>
      <h1 className="auth__title">Giriş Yap</h1>
      <h3 className="auth__sub-title">
        Fırsatlardan yararlanmak için giriş yap!
      </h3>
      <Form text="Giriş" isLogin={true} />
      <p className="auth__link">
        Hesabın yok mu? <Link to="/register">Üye Ol</Link>
      </p>
      {login.isError && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
    </AuthContainer>
  );
};

export default Login;
