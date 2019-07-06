function apretar(){
    alert("hola 1");
}; 

class circulo {
    constructor(area, perimetro){
        this.area = area;
        this.perimetro = perimetro;
    }

    setPerimetro(per) {
        this.perimetro = per
    }
}


//creando un evento
var eventoUno = document.querySelector(".tres"); 
eventoUno.addEventListener("click", function(){
    var c = new circulo(2,3)
    document.write(c.perimetro + "<br>");
    c.setPerimetro(6);
    document.write(c.perimetro);
});

var a = document.querySelector("#dos");
a.style.color = "red"; 




