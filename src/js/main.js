 document.addEventListener("DOMContentLoaded"),()=> {
  const url = document.getElementById("cento");
  const atras = document.getElementById("atras");
  const continuar = document.getElementById("continuar");
  const form = document.getElementById("form");
  const datosform = document.getElementById("datosform");
}
let formObjo="";
let url="";

const urla = document.getElementById("url");
function continuar(){
    paso3.style.display="none";
    b5.style.display= "none";
	if(document.getElementById("url").value == ""){
        urlesc.style.display = "block";
	}else{
		if(ex.style.display === "none"){
            ex.style.display = "block";
		}else{
            ex.style.display = "none";     
        }
		b1.style.display= "block";
        form.style.display= "block";
        b3.style.display= "block";
        b4.style.display= "none";
        b2.style.display= "none";
        
	}
}
function atras(){
	ex.style.display = "block"
	form.style.display = "none";
	b2.style.display = "block";
    b1.style.display = "none";
    document.getElementById("pel").classList.add("escElemento");
}
function validaform(){
  
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
       
    }if(document.getElementById("nombre").value!="" && document.getElementById("apellido").value!="" && document.getElementById("fecha").value!="" && document.getElementById("cp").value!="" && document.getElementById("country").value!="" && document.getElementById("municipio").value!="" ){
        b4.style.display = "block";
    } 
}

function formObj(nombre,apellido,fecha,cp,country,municipio) {
    
    this.nombre=document.getElementById(nombre).value;
    this.apellido=document.getElementById(apellido).value;
    this.fecha=document.getElementById(fecha).value;
    this.cp=document.getElementById(cp).value;
    this.country=document.getElementById(country).value;
    this.municipio=document.getElementById(municipio).value;
   
  }

  function atras2(){
    paso3.style.display="none";
		b1.style.display= "none";
        form.style.display= "block";
        b3.style.display= "block";
        b4.style.display= "block";
        b2.style.display= "none";
        b5.style.display = "none";
	}
  
function enseñaform(){

    var formularidatos=new formObj("nombre","apellido","fecha","cp","country","municipio");
    ex.style.display = "none";
	form.style.display = "none";
    paso3.style.display= "block";
    b4.style.display="none";
    b1.style.display="none";
    b5.style.display = "block";
    correcto.style.display = "block";
    
    document.getElementById("b4").classList.add("escElemento");
    document.getElementById("b1").classList.add("escElemento");

      document.getElementById("mnombre").textContent=formularidatos.nombre;
      document.getElementById("mapellido").textContent=formularidatos.apellido;
      document.getElementById("mfecha").textContent=formularidatos.fecha;
      document.getElementById("mcp").textContent=formularidatos.cp;
      document.getElementById("mcountry").textContent=formularidatos.country;
      document.getElementById("mmunicipio").textContent=formularidatos.municipio;
      
      
}

function agregarBoton(htmlID, texto, funcion) { 
	var o=document.getElementById(htmlID); 
	o.html+='<input type="button" value="'+texto+'" onclick="'+funcion+'">'; 
} 

function final(agregarBoton){
    ex.style.display = "none";
	form.style.display = "none";
    paso3.style.display= "none";
    b4.style.display="none";
    b1.style.display="none";
    b5.style.display = "none";
    correcto.style.display = "none";
    termina.style.display = "block";
    agregarBoton('miDiv', 'Saludar', 'alert(\'Hola!\')');
}