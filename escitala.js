function cifrarMensaje() {
  const mensaje = document.getElementById("mensaje").value;
  const columnas = parseInt(prompt("Ingrese el rango de cifrado:"));
  const mensajeCifrado = cifrarEscitala(mensaje, columnas);
  document.getElementById("resultado").value = mensajeCifrado;
}

function descifrarMensaje() {
  const mensajeCifrado = document.getElementById("resultado").value;
  const columnas = parseInt(prompt("Ingrese el rango de cifrado:"));
  const mensajeDescifrado = descifrarEscitala(mensajeCifrado, columnas);
  document.getElementById("resultadod").value = mensajeDescifrado;
}

function cifrarEscitala(mensaje, columnas) {
  const filas = Math.ceil(mensaje.length / columnas);
  const matriz = Array(filas)
    .fill()
    .map(() => Array(columnas).fill(""));

  let indice = 0;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      if (indice < mensaje.length) {
        matriz[i][j] = mensaje.charAt(indice);
        indice++;
      }
    }
  }

  let mensajeCifrado = "";
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      mensajeCifrado += matriz[j][i];
    }
  }

  return mensajeCifrado;
}

function descifrarEscitala(mensajeCifrado, columnas) {
  const filas = Math.ceil(mensajeCifrado.length / columnas);
  const matriz = Array(filas)
    .fill()
    .map(() => Array(columnas).fill(""));

  let indice = 0;
  for (let i = 0; i < columnas; i++) {
    for (let j = 0; j < filas; j++) {
      if (indice < mensajeCifrado.length) {
        matriz[j][i] = mensajeCifrado.charAt(indice);
        indice++;
      }
    }
  }

  let mensajeDescifrado = "";
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      mensajeDescifrado += matriz[i][j];
    }
  }

  return mensajeDescifrado;
}

// // cifrado
// const mensaje = "holayosoyedwinnosqueescribirmuchogustoenconoserteadios";
// const columnas = 9;
// const mensajeCifrado = cifrarEscitala(mensaje, columnas);
// console.log("Mensaje cifrado:", mensajeCifrado);

// // descifrado
// const mensajeCifrado2 =
//   "heurteodemorlweuetaiscneynchcaonroodsoigniosbuooyqisss";
// const columnas2 = 9;
// const mensajeDescifrado = descifrarEscitala(mensajeCifrado2, columnas2);
// console.log("Mensaje descifrado:", mensajeDescifrado);
