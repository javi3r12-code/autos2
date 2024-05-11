function Mostrar() {     
    var patente = localStorage.getItem("Patente");
    var marca = localStorage.getItem("Marca");
    var modelo = localStorage.getItem("Modelo");
    var anio = localStorage.getItem("Anio");
    var h2 = document.getElementById("titulo_li")

    
    h2.style.display= 'block'

    document.getElementById("datos").innerHTML = "\npatente: "+ patente +
    "\nmarca: " + marca + "\nmodelo: " + modelo +"\naño: " + anio;

    var listaAutos = JSON.parse(localStorage.getItem("autos")) || []; 
    var listaHTML = document.getElementById("datos_li");
  
    listaHTML.innerHTML = "";
  
    listaAutos.forEach(function(auto, index) {
        var btnEliminar = document.createElement("button");
        btnEliminar.style.height = '45px';
        btnEliminar.classList = 'btn btn-secondary';
        btnEliminar.style.float = 'inline-end';
        btnEliminar.textContent = "Eliminar";
        btnEliminar.addEventListener("click", function() {
            listaAutos.splice(index, 1); 
            localStorage.setItem("autos", JSON.stringify(listaAutos));
            Mostrar();
        });

        var br = document.createElement("br");
        var li = document.createElement("li");
        var div = document.createElement("div");
        var span = document.createElement("span");
        span.textContent= `${auto.Patente} ${auto.Marca} ${auto.Modelo} ${auto.Anio}`;
        div.style.display = "flex";
        div.appendChild(span);
        div.appendChild(br);
        div.appendChild(btnEliminar);
        li.appendChild(div);
        listaHTML.appendChild(li);
    });
}

$(document).ready(function(){
    $('#formulario').submit(function(e) {
        e.preventDefault();
        var patente = document.getElementById("patente").value;
        var span_p = document.getElementById("s_pat")
        if (patente === '')  {
            span_p.style.display= 'block'
            return false;

        } else {
            span_p.style.display= 'none'
            localStorage.setItem("Patente", patente);
        }

        var marca = document.getElementById("marca").value;
        var span_m = document.getElementById("s_mar")
        if(marca === ''){
            span_m.style.display= 'block'
            return false;
        } else {
            span_m.style.display= 'none'
            localStorage.setItem("Marca", marca);  
        }

        var modelo = document.getElementById("modelo").value
        var span_mo = document.getElementById("s_mod");
        if(modelo === ''){
            span_mo.style.display= 'block'
            return false
        } else {
            span_mo.style.display= 'none'
            localStorage.setItem("Modelo", modelo);
        }

        var anio = document.getElementById("anio").value;
        var span_an = document.getElementById("s_anio");
        if(anio === ''){                
            span_an.style.display= 'block'
            return false;
        } else {  
            span_an.style.display= 'none'
            localStorage.setItem("Anio", anio);
        } 

        var in_patente = document.getElementById("patente");
        var in_marca = document.getElementById("marca");
        var in_modelo = document.getElementById("modelo");
        var in_anio = document.getElementById("anio");

        var auto = {
            Patente: in_patente.value.trim(), 
            Marca: in_marca.value.trim(), 
            Modelo: in_modelo.value.trim(),
            Anio: in_anio.value
        };

        if (auto !== "") { 
            var listaAutos = JSON.parse(localStorage.getItem("autos")) || []; 
            listaAutos.push(auto);
            localStorage.setItem("autos", JSON.stringify(listaAutos)); 
            Mostrar(); 
        }
    });
});
