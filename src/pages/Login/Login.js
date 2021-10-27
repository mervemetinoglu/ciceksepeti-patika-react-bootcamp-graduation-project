import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../helpers/auth";
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import Form from "../../components/AuthForm/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { token, isError } = useSelector((state) => state.login);
  const history = useHistory();

  useEffect(() => {
    const condition = token?.length;
    if (condition) history.push("/");
  }, [history, token?.length]);

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
      {isError && (
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
