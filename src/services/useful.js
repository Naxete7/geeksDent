export const errorCheck = (field, value, type) => {
  switch (type) {
    case "text":
      if (!/[a-z]/gi.test(value)) {
        return "Formato no válido";
      }

      break;

    case "email":
      if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          value
        )
      ) {
        return "Escriba un formato correcto de email";
      }

      break;

    case "phone":
      //Tiene un bug
      if (!/[\d()+-]/g.test(value)) {
        return "Escriba un formato de teléfono correcto";
      }

      break;

    case "password":
      if (value.length < 8) {
        return "Password must be at least 8 characters long";
      }
      // validate it has one lower case letter
      if (!value.match(/[a-z]/)) {
        return "Password must have at least one lower case letter";
      }
      // validate it has one upper case letter
      if (!value.match(/[A-Z]/)) {
        return "Password must have at least one upper case letter";
      }
      // validate it has one number
      if (!value.match(/[0-9]/)) {
        return "Password must have at least one number";
      }

      break;

    default:
      break;
  }
};

export const setDayInSeventh = () => {
  let days = 7;
  let date = new Date();
  let last = new Date(date.getTime() + days * 24 * 60 * 60 * 1000);

  return last;
};
