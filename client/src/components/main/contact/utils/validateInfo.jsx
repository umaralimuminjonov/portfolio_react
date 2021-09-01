function validateInfo(values) {
  let errors = {
    fname: "",
    tel: "",
    text: "",
  };

  if (!values.fname) {
    errors.fname = "First name required";
  }

  if (!values.tel) {
    errors.tel = "Phone number required";
    errors.trans = "empty"
  } else if (isNaN(values.tel)) {
    errors.tel = "Enter the correct phone number";
    errors.trans = "invalid"
  } else if (values.tel.length < 9 || values.tel.length > 13) {
    errors.tel = "Enter the correct length phone number";
    errors.trans = "length"
  }

  if (!values.text) {
    errors.text = "Message required";
  }

  return errors;
}

export default validateInfo;
