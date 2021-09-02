import { useEffect, useState } from "react";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({
    fname: "",
    tel: "",
    text: "",
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

  const sendMsg = async () => {
    try {
      await axios.post("/api/message", { ...values });
      
      setValues({
        fname: "",
        tel: "",
        text: "",
      });

      document.getElementById("alert-success").style.display = "flex";
    } catch (err) {
      document.getElementById("alert-wrong").style.display = "flex";
    }
  };

  useEffect(() => {
    if (Object.values(errors).every((o) => o === "") && isSubmitting) {
      sendMsg();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
