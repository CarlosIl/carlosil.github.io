window.onload = function() {
    let boton = document.querySelector("#boton");
    boton.setAttribute("class","btn btn-primary");
    let insignia = document.querySelector("#insignia");
    insignia.setAttribute("class","badge text-bg-secondary");
    let contador = parseInt(insignia.textContent);
    boton.addEventListener("click", function(){
        contador = contador + 1;
        insignia.textContent = contador;
        if(contador == 50){
            let alerta = document.createElement("alert");
            alerta.textContent = "The maximum has been reached";
            alerta.setAttribute("class","alert alert-success");

            let icon1 = document.createElement("span");
            icon1.setAttribute("class","mdi mdi-medal");
            alerta.appendChild(icon1);

            let reinicio = document.createElement("button");
            reinicio.setAttribute("class","btn btn-danger");
            let icon2 = document.createElement("span");
            icon2.setAttribute("class","mdi mdi-close mdi-18px");
            reinicio.appendChild(icon2);

            reinicio.addEventListener("click",function(){
                location.reload();
            })
            alerta.appendChild(reinicio);
            boton.setAttribute("disabled","true");
            document.body.appendChild(alerta);
        }
    });
}

