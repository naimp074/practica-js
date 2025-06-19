const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

while (true) {
  let input = prompt("Introduce un número de DNI (entre 0 y 99999999):");

  if (input === null) {
    // El usuario tocó "Cancelar"
    break;
  }

  let dni = parseInt(input);

  if (isNaN(dni) || dni < 0 || dni > 99999999) {
    alert("Número inválido. Por favor, introduce un número entre 0 y 99999999.");
    continue;
  }

  let resto = dni % 23;
  let letra = letras[resto];

  alert(`DNI: ${dni} → Letra correspondiente: ${letra}`);
}