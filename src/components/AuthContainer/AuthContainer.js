import modelImg from "../../assets/register-login-bg.png";
import "./authContainer.style.scss";

const AuthContainer = ({ children }) => {
  return (
    <div className="auth__container">
      <div className="auth__container-left">
        <img src={modelImg} alt="Model" />
      </div>
      <div className="auth__container-right">
        <div className="logo"></div>
        <div className="auth__form-container">{children}</div>
      </div>
    </div>
  );
};

export default AuthContainer;
