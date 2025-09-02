// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres=[];

function agregarAmigo(){
    

    let nombreUsuario= document.getElementById("amigo").value;
    
    if(nombreUsuario !==""){

        //Verificar si ya existe

        if(nombres.includes(nombreUsuario)){
           
            alert("ese nombre ya esta en la lista");
            
        }else{
            //mostrar en la lista

            nombres.push(nombreUsuario);

            let li = document.createElement("li");

            li.textContent = nombreUsuario;
            
            document.getElementById("listaAmigos").appendChild(li);

            console.log("Nombres guardados:", nombres);

        }
        
        limpiarCaja();

        
    } 
    else {
        alert("Por favor ingresar un nombre válido.");
    }
}

function limpiarCaja(){
    // Limpiar el input
        document.getElementById("amigo").value = "";
}


function sortearAmigo(){

    
    let nombreSorteo = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[nombreSorteo];
    

    //Limpiar lista de nombres
   document.getElementById("listaAmigos").innerHTML="";
   document.getElementById("resultado").textContent = "🎉 El ganador es: " + ganador;
}