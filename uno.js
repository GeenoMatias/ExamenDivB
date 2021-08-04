
function mostrar()
{
  let nombre;
  let edad;
  let vacuna;
  let dosis;
  let sexo;
  let seguir;
  let contRusa = 0;
  let contAmericana = 0;
  let contChina = 0;
  let contVacunados = 0;
  let acumEdadRusa = 0;
  let promRusa;
  let mujerMasEdad = 0;
  let nameMujerMasEdad;
  let vacunaMujerMasEdad;
  let americanaMayores = 0;
  let porcAmericana;
  let contadorsegundaDosis = 0;
  let porsegundaDosis;
  let menosInoculada;
  let flagA = 1;

  do {
    nombre = prompt("Por favor ingrese su nombre: ");

    edad = parseInt(prompt(" Ingrese edad mayor o igual a 12 años. "));
    while (isNaN(edad) || edad < 12) {
      edad = parseInt(prompt(" Error. reingrese edad mayor o igual a 12 años. "));
    }

    vacuna = prompt("Ingrese el tipo de vacuna: rusa/china/americana").toLowerCase();
    while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana") {
      vacuna = prompt(" Error. reingrese el tipo de vacuna (rusa, china, americana) ").toLowerCase();
    }
    if (edad >= 12 && edad <= 17) {
      vacuna = "americana";
    }

    dosis = prompt(" Ingrese la dosis que recibió ");
    while (dosis != "p" && dosis != "s") {
      dosis = prompt(" Error. reingrese la dosis. ");
    }

    sexo = prompt(" Ingrese su sexo: (m/f) ").toLowerCase();
    while (sexo != "m" && sexo != "f") {
      sexo = prompt(" Error. reingrese sexo valido (m/f)").toLowerCase();
    }

    if (vacuna == "americana") {
      contAmericana++;
    }

    if (vacuna == "china") {
      contChina++;
    }

    if (vacuna == "rusa") {
      contRusa++;
      acumEdadRusa += edad;
    }

    if (sexo == "f" && (flagA || edad > mujerMasEdad)) {
      nameMujerMasEdad = nombre;
      vacunaMujerMasEdad = vacuna;
      flagA = 0;
    }

    if (vacuna == "americana" && edad > 17) {
      americanaMayores++;
    }

    if (dosis == "s") {
      contadorsegundaDosis++;
    }

    contVacunados++;

    seguir = prompt("Desea ingresar otro vacunado: s/n").toLocaleLowerCase();
  } while (seguir == "s");

  
  promRusa = acumEdadRusa / contRusa;

  porcAmericana = (americanaMayores * 100) / contAmericana;

  porsegundaDosis = (contadorsegundaDosis * 100) / contVacunados;

  if (contChina < contRusa && contChina < contAmericana){
    menosInoculada = "china";
  } else if (contRusa <= contChina && contRusa < contAmericana){
    menosInoculada = "rusa";
  } else {
    menosInoculada = "americana";
  }

  if ((contRusa = 0)){
       console.log("a) No ingresaron vacunados con la rusa.");
  } else {
       console.log("a) El promedio de vacunados con la rusa es " + promRusa);
  }

  if ((mujerMasEdad = 0)){
       console.log("b) No se ingresaron mujeres vacunadas.");
  } else {
       console.log(
      "b) La mayor mujer vacunada se llama: " +
        nameMujerMasEdad +
        " y le dieron la " +
        vacunaMujerMasEdad
    );
  }

  if ((americanaMayores = 0)){
       console.log("c) No se ingresaron mayores de edad con la vacuna americana");
  } else if ((contAmericana = 0)) {
       console.log("c) No se ingresaron vacunados con la americana");
  } else {
       console.log(
      "c) El porcentaje de mayores de edad vacunados con americana es: " +
        porcAmericana +
        "%"
    );
  }

  if ((contadorsegundaDosis = 0)){
    console.log("d) No hubo vacunados con segunda dosis");
  } else {
       console.log(
      "d) El porcentaje de vacunados con segunda dosis es: " +
        porsegundaDosis +
        "%"
    );
  }

  console.log("e) La vacuna menos inoculada es " + menosInoculada);
   




















}
