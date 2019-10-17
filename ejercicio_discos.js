function Disco(){
	this.nombre="";
	this.grupo="";
	this.ano="";
	this.tipo="";
	this.localizacion=0;
	this.prestado=false;

}
function Disco(nombre,grupo,ano,tipo,localizacion){
	this.nombre=nombre;
	this.grupo=grupo;
	this.ano=ano;
	this.tipo=tipo;
	this.localizacion=localizacion;
	this.prestado=false;

	// dentro del constructor con parametros hago los metodos
	
	this.cambiarEstanteria=function(numero){
		this.localizacion=numero;
	}
	this.cambiarPropiedadPrestado=function(){
		this.prestado=!this.prestado;
	}
	this.informacionDisco=function(){
		document.write("Nombre: "+this.nombre+"<br>"+
			"Grupo de musica: "+this.grupo+"<br>"+
			"Año de publicación: "+this.ano+"<br>"+
			"Tipo de musica: "+this.tipo+"<br>"+
			"Localización: "+this.localizacion+"<br>"+
			"Prestado: "+this.prestado+"<br>");
	}


	
}
// fuera de la función
var discos = new Array(
		new Disco("a","b","11","c",1),
		new Disco("d","e","12","f",2),
		new Disco("g","h","13","i",3),
		new Disco("j","k","14","l",4),
		new Disco("m","n","15","o",5)

	);


	// discos.informacionDisco();
	// discos.cambiarPropiedadPrestado();
	// discos.informacionDisco();

function abrirmenu(){

	opcion= prompt("-----Menu------\n"+
			"1. Mostrar numero de discos\n"+
			"2. Mostrar listado de discos(orden normal, al reves, ordenados alfabeticamente)\n"+
			"3. Mostrar intervalo de discos, formato inicio-fin\n"+
			"4. Añadir disco(al inicio o al final)\n"+
			"5. Borrar disco(al inicio o al final)\n"+
			"6. Consulta disco(por posicion o nombre)"

			);


	switch(opcion){
		case "1":
			alert("Hay un total de "+discos.length+" discos");
			break;
		case "2":
			opcion2= prompt("1.Orden normal\n"+"2. Al reves\n"+"3. Ordenado alfabeticamente");
			switch(opcion2){
				case "1":
					// for(var i in discos){
					// 	discos[i].informacionDisco()+"<br>";
					// }

					for(var i=0;i<discos.length;i++){
						discos[i].informacionDisco();
					}
					
					break;
				case "2":
					
						hola= discos.reverse();
						
						for(var i in hola){
							hola[i].informacionDisco();
						}

					
					break;

				case "3":
					
					b = discos.slice();
					b.sort(function(a,b){
								return ((a.nombre < b.nombre) ? -1 : ((a.nombre > b.nombre) ? 1 : 0));
							});


					for(var i in b){
						b[i].informacionDisco();
					}
					break;
			}
		break;
		case "3":
			opcion3=prompt("Ingresa un intervalo en formato inicio-fin");

			intervalo = opcion3.split("-");
			alert(intervalo);

			op1=intervalo[0];
			op2=intervalo[1];

			if (op2<op1 || op2==op1) {
				alert("El inicio no puede ser mayor o igual al final");
				opcion3=prompt("Ingresa un intervalo en formato inicio-fin");

				intervalo = opcion3.split("-");	

			}

			op1=intervalo[0];
			op2=intervalo[1];

		result = discos.slice(op1,op2);
			for(var i in result){
				result[i].informacionDisco();
			}

		break;
		case "4":
			opcion4= prompt("1. Añadir al inicion\n"+"2. Añadir al final");
			if(opcion4 == "1"){
				discos.unshift(new Disco("ke","ke","40","z",4024));

				for(var i in discos){
					discos[i].informacionDisco();
				}
			}else if(opcion4 =="2"){
				discos.push(new Disco("ulti","ulti","50","y",3000));
				for(var i in discos){
					discos[i].informacionDisco();
					document.write("<br>");
				}
			}
		break;
		case "5":
			opcion5= prompt("1.Borrar al inicio\n"+"2. Borrar al final");

			if(opcion5 == "1"){
				// delete discos[0];
				// discos.splice(0,1)
				discos.shift();
				for(var i in discos	){
					discos[i].informacionDisco();
				}
			}else if(opcion5 == "2"){
				// delete discos[4];
				// discos.splice(4,1);
					discos.pop();	

				for(var i in discos){
					discos[i].informacionDisco();
				}
			}
			break;
			case "6":
				opcion6= prompt("1.Consulta por posición\n"+
					"2.Consultar por nombre");

				if(opcion6 == "1"){
					posi= prompt("Ingresa la posición");
					posicion = discos[posi];
					posicion.informacionDisco();
					
				}else if(opcion6 == "2"){

					//ni puta ideaaaaaaaaaa
					posi= prompt("Ingresa el elemento");


					posicion = discos.indexOf(posi);
					posicion.informacionDisco();
				}				
	}

}