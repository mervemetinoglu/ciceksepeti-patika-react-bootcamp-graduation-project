import { useState } from "react";
import { useDispatch } from "react-redux";
import registerAction from "../actions/registerAction";
import loginAction from "../actions/loginAction";
import { validateInfo } from "../helpers/validateInfo";
import { setEmail } from "../helpers/auth";

const useForm = (isLogin) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onBlur = () => {
    // if (values.email.length > 0 && values.password.length > 0)
      setErrors(validateInfo(values));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      dispatch(loginAction(values));
      setEmail(values.email);
    } else {
      dispatch(registerAction(values));
      setEmail(values.email);
    }

  };

  return { onChange, values, handleSubmit, errors, onBlur };
};

export default useForm;
