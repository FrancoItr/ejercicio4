let nombre = "Franco";
let apellido = "Iturri";
let estudiante = `${nombre} ${apellido}`;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let longitudEstudiante = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length-1);
let sinEspacios = estudiante.replace(" ", "");
let tieneNombre = estudiante.includes(nombre)

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longitudEstudiante);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(sinEspacios);
console.log(tieneNombre);