# autos2

   function Salve(){
    
    var patente = document.getElementById("patente").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value
    var anio = document.getElementById("anio").value;
   

         const automoviles = {Patente: patente, Marca: marca, Modelo: modelo, Anio: anio }
    
   
    localStorage.setItem( 'i', JSON.stringify(automoviles))
   
    let auto = JSON.parse(localStorage.getItem('i'))


      console.log(auto)
        
    ;
    


  }

