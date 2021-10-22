import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import Form from "../../components/AuthForm/Form";
import { getToken } from "../../helpers/auth";

const Register = () => {
  const register = useSelector((state) => state.register);
  const history = useHistory();

  //if client has an access token redirect to home page
  useEffect(() => {
    const condition = register.token?.length;
    if (condition) history.push("/");
  }, [history, register.token?.length]);

  return (
    <AuthContainer>
      <h1 className="auth__title">Üye Ol</h1>
      <h3 className="auth__sub-title">Fırsatlardan yararlanmak için üye ol!</h3>
      <Form text="Üye Ol" isLogin={false} />
      <p className="auth__link">
        Hesabın var mı? <Link to="/login">Giriş Yap</Link>
      </p>

      {register.isError && (
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

export default Register;
