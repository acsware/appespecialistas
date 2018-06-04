function chatBot() {
	
	// current user input
	this.input;
	
	
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(cordial|buenas|hola|hi|saludo)(\\s|!|\\.|$)'))

			return "Hola, Soy GUAALLY en que le puedo ayudar???";
		
		if(this.match('necesito[^ ]* up') || this.match('mecanico'))
			return ["Tenemos Registrado 4 Mecanicos", "Motos: Walter Cel:310123456 Miguel Cel:300123456 "," Carro:Luis Cel:312123456, Alberto Cel:313123456"];
		
		if(this.match('necesito[^ ]* up') || this.match('electricista'))
			return "Tenemos Registrado 50 Electricistas";
		if(this.match('necesito[^ ]* up') || this.match('tecnico'))
			return "Tenemos Registrado mas de 50 tecnicos, se mas Especifico";
		
		if(this.match('necesito[^ ]* up') || this.match('odontologo') || this.match('dolor muela|dolor diente'))
			return "Tenemos Registrado 30 Odontologos, se mas Especifico";
		
		if(this.match('necesito[^ ]* up') || this.match('doctor|medico|doctor|galeno|facultativo|clínico') || this.match('dolor|fiebre'))
			return ["Tenemos Registrado 4 Medicos", "Doctores: Walter Cel:310123456 Miguel Cel:300123456 "," Odontologos:Luis Cel:312123456, Alberto Cel:313123456"];
		

		if(this.match('varado|averiado|mecanico|deteriorado|inutil|roto|dañado|inservible|destrozado'))
			return "Necesitas un Mecanico o un tecnico??";
		
		if(this.match('mal|indispuesto|embaraz|herid|doliente|infectado|estropeado|aquejado'))
			return "Necesitas un Doctor u Odontologo??";

		if(this.match('^no+(\\s|!|\\.|$)'))
			return "fue un placer ayudarle";
		
		if(this.match('(gracias|bye|hasta luego)'))
			return ["Con todo gusto!!!!", "feliz dia!"];
		
		if(this.match('antonio|cala'))
			return "Antonio Cala, es quien me esta ayudando a mi aprendizaje, este proyecto es solo Didactico, creado por la UTB";		
		if(this.match('ingenieria(os)+') || this.match('(algoritmos)+(W|$)') || this.match('fundamentos'))
			return ["Puede ingresar a la pagina y consultar las notas", "https://ucundinamarca.edu.co"];
		
		if(this.input == 'noop')
			return;
		
		return input + " No tengo informacion sobre tu consulta pero se puede comunicar con nosotros, Aun debo Aprender! ";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
