import React from "react";
import './authForm.style.scss';
import useForm from "../../hooks/useForm";

const Form = ({ text, isLogin }) => {
  const { onChange, values, handleSubmit, errors, onBlur } = useForm(isLogin);

  return (
    <form onSubmit={handleSubmit} className="auth__form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        value={values.email}
        onBlur={onBlur}
        onChange={onChange}
        className={errors.email ? " error" : " default"}
      />
      {errors.email && <p>{errors.email} </p>}
      <label htmlFor="password">Şifre</label>
      <input
        type="password"
        name="password"
        value={values.password}
        onBlur={onBlur}
        onChange={onChange}
        className={errors.password ? " error" : " default"}
      />
      {errors.password && <p>{errors.password} </p>}
      <button type="submit">{text}</button>
    </form>
  );
};

export default Form;
