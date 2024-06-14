function muestraclasificacion() {
	const numeroani = parseInt(document.getElementById('animales').value);
	let animales;

	switch (numeroani) {
	case 1:
		animales ="SON ANIALES HERBIVOROS";
		break;
	case 2:
		animales ="SON ANIMALES CARNIVOROS";
		break;
	case 3:
		animales ="SON ANIMALES INSECTIVOROS";
		break;
	case 4:
		animales ="SON ANIMALES OMNIVOROS";
		break;
	default:
		animales ="Numero no valido. por favor introduce un numero entre 1 y 4";
		break;
	}
	document.getElementById('result').textContent =animales;
}
