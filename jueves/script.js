let materias = [];
let cantidad = parseInt(prompt("¿Cuántas materias vas a ingresar?"));


for (let i = 0; i < cantidad; i++) {
  let nombre = prompt(`Nombre de la materia ${i + 1}:`);
  let nota = parseFloat(prompt(`Nota de ${nombre}:`));
  let peso = parseFloat(prompt(`Peso de ${nombre}:`));

  materias.push({ nombre: nombre, nota: nota, peso: peso });
}


let sumaPonderada = 0;
let sumaPesos = 0;

for (let i = 0; i < materias.length; i++) {
  sumaPonderada += materias[i].nota * materias[i].peso;
  sumaPesos += materias[i].peso;
}

let promedio = sumaPonderada / sumaPesos;


let estado = "";
if (promedio >= 3.5) {
  estado = "Aprueba";
} else if (promedio < 2.5) {
  estado = "Repite el curso";
} else {
  estado = "Necesita reforzar";
}


alert(`Promedio ponderado: ${promedio.toFixed(2)}\nEstado del estudiante: ${estado}`);
