 document.addEventListener("DOMContentLoaded"),()=> {
  const url = document.getElementById("cento");
  const atras = document.getElementById("atras");
  const continuar = document.getElementById("continuar");
  const form = document.getElementById("form");
  const datosform = document.getElementById("datosform");
}

function continuar(){
	if(document.getElementById("cento").value == ""){
		urlesc.style.display = "block";

	}else{

		if(ex.style.display === "none"){

			ex.style.display = "block";
		}else{
			ex.style.display = "none";
		}
		
		b1.style.display= "block"
		b2.style.display= "block"
		form.style.display= "block"
	}
}

function atras(){
	ex.style.display = "block"
	form.style.display = "none";
	b2.style.display = "block";
	b1.style.display = "none";

}
function caca(){

    if((document.getElementById("nombre").value == "")){
        p1.style.display = "block";
       

    }else{
        p1.style.display = "none";
    }if((document.getElementById("apellido").value == "")){
        p2.style.display = "block";
    }else{
        p2.style.display = "none";
    }if((document.getElementById("fecha").value == "")){
        p3.style.display = "block";
    }else{
        p3.style.display = "none";
    }if((document.getElementById("cp").value == "")){
        p4.style.display = "block";
    }else{
        p4.style.display = "none";
    }if((document.getElementById("country").value == "")){
        p5.style.display = "block";
    }else{
        p5.style.display = "none";
    }if((document.getElementById("municipio").value == "")){
        p6.style.display = "block";
    }else{
        p6.style.display = "none";
}
}