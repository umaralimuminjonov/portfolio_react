import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const login = async () => {
    try {
      await axios.post("/auth/login", { ...values });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/messages";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).every((o) => o === "") && isSubmitting) {
      login();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
