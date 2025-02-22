const codes = ["1234", "5678", "9012", "3456", "7890", "0123", "4567", "8901", "2345", "6789", "9876", "5432", "1098", "7654", "3210", "8765", "4321", "0987", "6543", "2109", "1122", "3344", "5566", "7788", "9900", "2244", "6688", "0022", "4466", "8800", "1357", "2468", "3579", "4680", "5791", "6802", "7913", "8024", "9135", "0246", "1470", "2581", "3692", "4703", "5814", "6925", "7036", "8147", "9258", "0369", "1591", "2602", "3713", "4824", "5935", "6046", "7157", "8268", "9379", "0480", "1604", "2715", "3826", "4937", "5048", "6159", "7260", "8371", "9482", "0593", "1727", "2838", "3949", "4050", "5161", "6272", "7383", "8494", "9505", "0616", "1840", "2951", "3062", "4173", "5284", "6395", "7406", "8517", "9628", "0739", "1963", "2074", "3185", "4296", "5307", "6418", "7529", "8630", "9741", "0852"];

let usedCodes = JSON.parse(localStorage.getItem("usedCodes")) || {};

// Función para mostrar la pantalla de acceso
function showAccessScreen() {
  document.getElementById("access-screen").style.display = "block";
  document.getElementById("calculator").style.display = "none";
}

// Función para mostrar la calculadora
function showCalculator() {
  document.getElementById("access-screen").style.display = "none";
  document.getElementById("calculator").style.display = "block";
}

document.getElementById("access-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const code = document.getElementById("code").value;

  if (codes.includes(code)) {
    if (usedCodes[code] === undefined) {
      usedCodes[code] = true;
      localStorage.setItem("usedCodes", JSON.stringify(usedCodes));
      localStorage.setItem("accessGranted", "true");
      // Redirige a la URL deseada
      window.location.href = "https://luishparedes.github.io/magica_pro-web/";
    } else {
      if (usedCodes[code] === true) {
        localStorage.setItem("accessGranted", "true");
        // Redirige a la URL deseada
        window.location.href = "https://luishparedes.github.io/magica_pro-web/";
      } else {
        alert("Este código ya ha sido utilizado por otra persona.");
      }
    }
  } else {
    alert("Código incorrecto.");
  }
});

// Botón de cerrar sesión
document.getElementById("logout").addEventListener("click", function() {
  localStorage.removeItem("accessGranted");
  showAccessScreen();
});

// Comprobar si ya se concedió el acceso al cargar la página
if (localStorage.getItem("accessGranted") === "true") {
  showCalculator();
} else {
  showAccessScreen();
}
