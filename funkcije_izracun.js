function izracunIdealnegaPlina() {
	let tlak1 = parseFloat(document.getElementById('tlak1').value);
	let volumen1 = parseFloat(document.getElementById('volumen1').value);
	let temperatura1 = parseFloat(document.getElementById('temperatura1').value);
	
	let tlak2 = parseFloat(document.getElementById('tlak2').value);
	let volumen2 = parseFloat(document.getElementById('volumen2').value);
	let temperatura2 = parseFloat(document.getElementById('temperatura2').value);
	
	let konstanta = 0;
	
	debugger;
	if (tlak1 == 0 || isNaN(tlak1)) {
		tlak1 = (tlak2 * volumen2 * temperatura1) / (temperatura2 * volumen1);
		
		document.getElementById('tlak1').value = tlak1;
	} else if (tlak2 == 0 || isNaN(tlak2)) {
		tlak2 = (tlak1 * volumen1 * temperatura2) / (temperatura1 * volumen2);
		
		document.getElementById('tlak2').value = tlak2;
	} else if (volumen1 == 0 ||  isNaN(volumen1)) {
		volumen1 = (tlak2 * volumen2 * temperatura1) / (tlak1 * temperatura2);
		
		document.getElementById('volumen1').value = volumen1;
	} else if (volumen2 == 0 ||  isNaN(volumen2)) {
		volumen2 = (tlak1 * volumen1 * temperatura2) / (tlak2 * temperatura1);
		
		document.getElementById('volumen2').value = volumen2;
	} else if (temperatura1 == 0 ||  isNaN(temperatura1)) {
		temperatura1 = (tlak1 * volumen1 * temperatura2) / (tlak2 * volumen2);
		
		document.getElementById('temperatura1').value = temperatura1;
	} else if (temperatura2 == 0 ||  isNaN(temperatura2)) {
		temperatura2 = (tlak2 * volumen2 * temperatura1) / (tlak1 * volumen1);
		
		document.getElementById('temperatura2').value = temperatura2;
	}
}