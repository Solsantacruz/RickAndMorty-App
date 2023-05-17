function validate(username, password) {
    const errors = {};
  
    // Validate username
    if (!username) {
        errors.username = "El campo no puede estar vacio";
    } else if (!/\S+@\S+\.\S+/.test(username)) {
        errors.username = "Debe ser un Email valido";

    } else if (username.length > 35) {
      errors.username = "El nombre de usuario no puede contener mas de 35 caracteres";
    }
  
    // Validate password
    if (!password) {
      errors.password = "El campo no puede estar vacio";
    } else if (!/\d/.test(password)) {
      errors.password = "La contraseña tiene que tener al menos un número.";
    } else if (password.length < 6 || password.length > 10) {
      errors.password = "La contraseña tiene que tener entre 6 y 10 caracteres";
    }
  
    return errors;
  }
  
  export default validate;