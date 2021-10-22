export const validateInfo = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Email gerekli!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(values.email)) {
    errors.email = "Email geçerli değil!";
  }

  if (!values.password) {
    errors.password = "Şifre gerekli!";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password =
      "Şifre en az 8 en fazla 20 karakter uzunluğunda olmalıdır!";
  }

  return errors;
};
