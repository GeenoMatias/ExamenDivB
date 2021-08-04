function mostrar()
{
	let origen;
	let cantVacunas = 0;
	let costoVuelo;
	let vacunasMax;
	let descuento;
	let promedio = 0;
	let acumAsia = 0;
	let vacunaAsia = 0;
	let importeBruto = 0;
	let origenMax;
	let flagG = 1;
	let acumVacunas;
	let importeTotal;
	let descuentoSolo;


	for (let i = 0; i < 10; i++) {
		origen = prompt("Ingrese su origen: 'asia' 'europa' 'usa'").toLowerCase();
		while (!(origen == 'asia' || origen == 'europa' || origen == 'usa')) {
			origen = prompt("Origen incorrecto, vuelva a intentarlo: 'asia' 'europa' 'usa' ").toLowerCase();
		}
		cantVacunas = parseInt(prompt("Cantidad de vacunas"));
		while (isNaN(cantVacunas) || cantVacunas < 0) {
			cantVacunas = parseInt(prompt("Cantidad invalida, vuelva a ingresar nuevamente:"));
		}
		costoVuelo = parseInt(prompt("Costo vuelo, (entre 1 millon y 5 millones de pesos)"));
		while (isNaN(costoVuelo) || costoVuelo < 1000000 && costoVuelo > 5000000) {
			costoVuelo = parseInt(prompt("precio invalido, vuelva a ingresar nuevamente:"));
		}
		importeBruto += costoVuelo;

		if (flagG || cantVacunas > vacunasMax) {
			acumVacunas++;
			vacunasMax = cantVacunas;
			origenMax = origen;
			flagG = 0;
		}
		if (origen == 'asia') {
			acumAsia++;
			vacunaAsia += cantVacunas;
		}
	}
    
	if (vacunasMax > 4000000) {
		descuentoSolo = importeBruto * .3;
		descuento = importeBruto - (importeBruto * .3);
		document.write("Descuento de " + descuentoSolo + " y el importe final con descuento es " + descuento + "<br>");
	} else if (vacunasMax >= 2000000 && vacunasMax <= 4000000) {
		descuentoSolo = importeBruto * .2;                                                          // punto D
		descuento = importeBruto - (importeBruto * .2);
		document.write("Descuento de " + descuentoSolo + " y el importe final con descuento es " + descuento + "<br>");
	} else if (vacunasMax < 2000000) {
		document.write("El importe bruto es " + importeBruto + "<br>");
	}
	importeTotal = descuento;

	promedio = vacunaAsia / acumAsia;

    document.write("El origen que envio mayor cantidad de vacunas es: " + origenMax + "<br>"); // punto A hecho
	document.write("El promedio de vacunas llegadas de asia es: " + promedio + "<br>"); // punto B hecho
	document.write("Total sin descuentos por gastos de viajes: " + importeBruto + "<br>"); // punto C hecho
}
