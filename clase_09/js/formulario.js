var form = document.getElementById("subscription-form");
var inputs = form.getElementsByTagName("input");
var title = document.getElementById("form-title");

var validations = {
  fullName: function(value) {
    return value.length > 6 && value.indexOf(" ") !== -1;
  },
  email: function(value) {
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
  },
  password: function(value) {
    return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
  },
  repeatPassword: function(value) {
    var original = document.getElementById("password").value.trim();
    return value === original;
  },
  age: function(value) {
    return parseInt(value, 10) >= 18;
  },
  phone: function(value) {
    return /^\d{7,}$/.test(value);
  },
  address: function(value) {
    return value.length >= 5 && /\d/.test(value) && /[a-zA-Z]/.test(value) && /\s/.test(value);
  },
  city: function(value) {
    return value.length >= 3;
  },
  zip: function(value) {
    return value.length >= 3;
  },
  dni: function(value) {
    return /^\d{7,8}$/.test(value);
  }
};

var errorMessages = {
  fullName: "Debe tener más de 6 letras y al menos un espacio.",
  email: "Formato de email no válido.",
  password: "Debe tener al menos 8 caracteres con letras y números.",
  repeatPassword: "Las contraseñas no coinciden.",
  age: "Debes tener al menos 18 años.",
  phone: "Mínimo 7 dígitos, sin espacios ni símbolos.",
  address: "Debe tener letras, números y al menos un espacio.",
  city: "Debe tener al menos 3 caracteres.",
  zip: "Debe tener al menos 3 caracteres.",
  dni: "Debe tener 7 u 8 dígitos."
};

var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeatPassword");


function validateRepeatPassword() {
  var val = repeatPasswordInput.value.trim();
  var original = passwordInput.value.trim();
  var errorSpan = document.getElementById("error-repeatPassword");

  if (val === "") {
    errorSpan.textContent = errorMessages.repeatPassword;
    repeatPasswordInput.classList.add("error-border");
    repeatPasswordInput.classList.remove("valid-border");
    return false;
  }

  if (val !== original) {
    errorSpan.textContent = errorMessages.repeatPassword;
    repeatPasswordInput.classList.add("error-border");
    repeatPasswordInput.classList.remove("valid-border");
    return false;
  } else {
    errorSpan.textContent = "";
    repeatPasswordInput.classList.remove("error-border");
    repeatPasswordInput.classList.add("valid-border");
    return true;
  }
}


for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  var id = input.id;

  input.addEventListener("blur", function() {
    var val = this.value.trim();
    var fieldId = this.id;
    var errorSpan = document.getElementById("error-" + fieldId);

    if (fieldId === "repeatPassword") {
      validateRepeatPassword();
      return;
    }

    if (fieldId === "password") {
      if (!validations.password(val)) {
        errorSpan.textContent = errorMessages.password;
        this.classList.add("error-border");
        this.classList.remove("valid-border");
      } else {
        errorSpan.textContent = "";
        this.classList.remove("error-border");
        this.classList.add("valid-border");
      }
 
      validateRepeatPassword();
      return;
    }

    if (!validations[fieldId](val)) {
      errorSpan.textContent = errorMessages[fieldId];
      this.classList.add("error-border");
      this.classList.remove("valid-border");
    } else {
      errorSpan.textContent = "";
      this.classList.remove("error-border");
      this.classList.add("valid-border");
    }
  });

  input.addEventListener("focus", function() {
    var fieldId = this.id;
    document.getElementById("error-" + fieldId).textContent = "";
  });

  if (id === "fullName") {
    input.addEventListener("keydown", function() {
      var self = this;
      setTimeout(function() {
        title.textContent = "Hola, " + self.value;
      }, 0);
    });
    input.addEventListener("focus", function() {
      title.textContent = "Hola, " + this.value;
    });
  }
}

form.addEventListener("submit", function(e) {
  e.preventDefault();

  var hasErrors = false;
  var formData = "";
  var errorData = "";

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var id = input.id;
    var value = input.value.trim();
    var errorSpan = document.getElementById("error-" + id);

    var label = input.parentElement.querySelector("label");
    var labelText = label ? label.textContent.replace(":", "") : id;

    if (id === "repeatPassword") {
      if (!validateRepeatPassword()) {
        hasErrors = true;
        errorData += labelText + ": " + errorMessages[id] + "\n";
      } else {
        formData += labelText + ": " + value + "\n";
      }
      continue;
    }

    if (!validations[id](value)) {
      errorSpan.textContent = errorMessages[id];
      input.classList.add("error-border");
      input.classList.remove("valid-border");
      hasErrors = true;
      errorData += labelText + ": " + errorMessages[id] + "\n";
    } else {
      errorSpan.textContent = "";
      input.classList.remove("error-border");
      input.classList.add("valid-border");
      formData += labelText + ": " + value + "\n";
    }
  }

  if (hasErrors) {
    alert("Hay errores en el formulario:\n\n" + errorData);
  } else {
    alert("Formulario enviado correctamente:\n\n" + formData);
  }
});
