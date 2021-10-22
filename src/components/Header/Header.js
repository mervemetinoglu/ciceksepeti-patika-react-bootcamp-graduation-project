import React from "react";
import "./header.scss";
import appLogo from "../../assets/header-icon.svg";
import { AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { getEmail, getToken } from "../../helpers/auth";

const Header = () => {
  const history = useHistory();
  const token = getToken();
  const email = getEmail();

  const displayAccount = () => {
    history.push("/account");
  };

  const displayHome = () => {
    history.push("/");
  };

  const displayLogin = () => {
    history.push("/login");
  };

  const displayAddProduct = () => {
    history.push("/addProduct");
  };

  return (
    <header className="header__container">
      <div className="header__logo" onClick={displayHome}>
        <img src={appLogo} alt="header-logo" />
      </div>
      {token ? (
        <nav className="header__buttons">
          <button onClick={displayAddProduct}>
            <AiOutlinePlus /> Ürün Ekle
          </button>
          <button onClick={displayAccount}>
            <AiOutlineUser /> Hesabım
          </button>
        </nav>
      ) : (
        <nav className="header__buttons">
          <button onClick={displayLogin}>
            <AiOutlineUser /> Giriş Yap
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
