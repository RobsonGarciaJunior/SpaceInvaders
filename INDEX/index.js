import GestorUsuarios from "../DATA/gestorUsuarios.js";
const instanciaUnica = GestorUsuarios.getInstance();
document.addEventListener("DOMContentLoaded", () => {
  // Llama a la función para crear la tabla
  updateButtons(); // Actualiza los botones según el estado de la sesión
});

function updateButtons() {
  const usuarioActivo = instanciaUnica.obtenerUsuarioLoggeado(); // Verificar usuario logueado

  const loginButton = document.getElementById("login");
  const jugarButton = document.getElementById("jugar");

  if (usuarioActivo !== null) {
    // Si el usuario está logueado, mostrar el botón "Jugar" y ocultar "Iniciar Sesión"
    jugarButton.style.display = "block";
    loginButton.style.display = "none";
    document.getElementById("profile").textContent = "Editar Perfil";
  } else {
    // Si el usuario no está logueado, ocultar "Jugar" y mostrar "Iniciar Sesión"
    jugarButton.style.display = "none";
    loginButton.style.display = "block";
  }
}
