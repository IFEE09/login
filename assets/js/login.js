// Obtenemos la referencia del input mediante su id
const emailInput = document.getElementById('emailInput');

// Expresión regular para una validación básica de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Se añade un listener para validar el input en cada cambio
emailInput.addEventListener('input', () => {
  const valor = emailInput.value.trim();

  // Si el input no está vacío y cumple el formato, se añade la clase 'valid'
  if (valor !== '' && emailRegex.test(valor)) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
  } else {
    // Si no es válido o está vacío, se añade la clase 'invalid'
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
  }
});

// Obtenemos la referencia al input de contraseña
const passwordInput = document.getElementById('passwordInput');

// Escuchamos el evento 'input' para validar en tiempo real
passwordInput.addEventListener('input', () => {
  const valor = passwordInput.value.trim();

  // Si el valor no está vacío, el input es válido
  if (valor !== '') {
    passwordInput.classList.remove('invalid');
    passwordInput.classList.add('valid');
  } else {
    // Si está vacío, se considera inválido
    passwordInput.classList.remove('valid');
    passwordInput.classList.add('invalid');
  }
});