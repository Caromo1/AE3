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
    document.getElementById("pel").classList.add("escElemento");

}
function caca(){

    if((document.getElementById("nombre").value == "")){
        document.getElementById("p1").classList.remove("escElemento");
        document.getElementById("p11").classList.remove("escElemento");
    }else{
        document.getElementById("p1").classList.add("escElemento");
        document.getElementById("p11").classList.add("escElemento");
    }if((document.getElementById("apellido").value == "")){
        document.getElementById("p2").classList.remove("escElemento");
        document.getElementById("p22").classList.remove("escElemento");
    }else{
        document.getElementById("p2").classList.add("escElemento");
        document.getElementById("p22").classList.add("escElemento");
    }if((document.getElementById("fecha").value == "")){
        document.getElementById("p3").classList.remove("escElemento");
        document.getElementById("p33").classList.remove("escElemento");
    }else{
        document.getElementById("p3").classList.add("escElemento");
        document.getElementById("p33").classList.add("escElemento");
    }if((document.getElementById("cp").value == "")){
        document.getElementById("p4").classList.remove("escElemento");
        document.getElementById("p44").classList.remove("escElemento");
    }else{
        document.getElementById("p4").classList.add("escElemento");
        document.getElementById("p44").classList.add("escElemento");
    }if((document.getElementById("country").value == "")){
        document.getElementById("p5").classList.remove("escElemento");
        document.getElementById("p55").classList.remove("escElemento");
    }else{
        document.getElementById("p5").classList.add("escElemento");
        document.getElementById("p55").classList.add("escElemento");
    }if((document.getElementById("municipio").value == "")){
        document.getElementById("p6").classList.remove("escElemento");
        document.getElementById("p66").classList.remove("escElemento");
    }else{
        document.getElementById("p6").classList.add("escElemento");
        document.getElementById("p66").classList.add("escElemento");
}
}








