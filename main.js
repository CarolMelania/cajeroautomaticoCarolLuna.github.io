window.addEventListener("DOMContentLoaded", () => {
    elementoCuentas();
    elementosCuentas();
    if (localStorage.getItem("usuario") != null) {
        const inicio = document.getElementById("inicio");
        inicio.classList.add("d-none")
        const funciones = document.getElementById("funciones");
        funciones.classList.remove("d-none");
    }
});

const cuentasUser = () => {
    let usuario = [
        { nombre: "Mari", saldo: 200, nip: '4567', id: 1, boton: 'button1' },
        { nombre: "Gera", saldo: 290, nip: '7890', id: 2, boton: 'button2' },
        { nombre: "Maui", saldo: 67, nip: '9102', id: 3, boton: 'button3' }
    ];
    return usuario;
}

function cuentasRegistradas(registrocue, nip) {
    const cuentas = cuentasUser();
    for (let i = 0; i < usuario.length; i++) {
        if (nip == usuario[i].nip && usuario[i].boton == registrocue) {
            return usuario[i];
        }
    }
    return false;
}

const elementoCuentas = () => {
    const leftcolumn = document.getElementById("columnas"); 
    leftcolumn.addEventListener( "click", (event) => {

        if ((event.target.tagName === "BUTTON" && event.target.classList.contains("button1")) || (event.target.tagName === "BUTTON" && event.target.classList.contains("button2")) || (event.target.tagName === "BUTTON" && event.target.classList.contains("button3"))) { //VALIDAR
            console.log(event.target.classList)
            let registrocue = event.target.classList[2]

            let bienvenidaopcion = document.getElementById("usuario");
            const operadoresBotoon = document.getElementById("boton-opc").getBoundingClientRect(); 
            let contador = 0;
            let  repeticion= 1;

            do {
                let ingreso = prompt("Ingrese su Nip")
                let ingresoCuentas = cuentasRegistradas(registrocue, ingreso)
                contador++;
                if (ingresoCuentas != false) {
                    Swal.fire({
                        title: '¡Bienvenido!',
                        html: `<b> HOLA ${ingresoCuentas.nombre} </b>`,
                        widht: '70%'
                    });
                    nombreBienvenida.innerHTML = `¡HOLA ${ingresoCuentas.nombre}!`;

                    localStorage.setItem("usuario", JSON.stringify(ingresoCuentas));
                    const inicio = document.getElementById("inicio");
                    inicio.classList.add("d-none")
                    const funciones = document.getElementById("funciones");
                    funciones.classList.remove("d-none");
                    break;
                }
                
                else {
                    alert(`Nip incorrecto, intente de nuevo `)
                    if (repeticion === 0) {
                        alert('Cuenta suspendida')
                        break;
                    }
                }
            } while (contador < 3);
        }
    })
}

const elementosCuentas = () => {
    const cuentas = cuentasUser();
    const colOpc = document.getElementById("col-opc");

    
    colOpc.addEventListener("click", (event) => {

   
        if (event.target.tagName === "BUTTON" && event.target.classList.contains("c-saldo")) {
            const cuentaLog = JSON.local(localStorage.getItem("usuario"));
            alert(`Su saldo es de:  $ ${ingresoCuentas.saldo}`)
        }

 
        if (event.target.tagName === "BUTTON" && event.target.classList.contains("in-monto")) {
            const ingresoCuentas = JSON.local(localStorage.getItem("usuarioLogeado"));
            console.log(ingresoCuentas);

            let ingreso = prompt("¿Cuantó efectivo desea depositar?");
          
            while (ingreso == null || /\D/.test(ingreso)) {
                ingreso = prompt("Intente de Nuevo: ");
            };

           
            if(ingreso == "" ){
                ingreso = 0;
            }

        
            let dineroDisponible = localInt(ingresoCuentas.saldo) + localInt(ingreso);

         
            if(dineroDisponible > 990){
                Swal.fire({
                    title: '¡INCORRECTO!',
                    html: `<b> El saldo no debe ser mayor a $990 </b>`,
                    widht: '70%',
                });
            }
            else{
                alert(`total de $${dineroDsiponible}`)
            localStorage.setItem("usuario", JSON.stringify({
                ...ingresoCuentas,
                saldo: dineroDisponible
            }))
            }
        }

        if (event.target.tagName === "BUTTON" && event.target.classList.contains("re-monto")) {
            const ingresoCuentas = JSON.local(localStorage.getItem("usuario"));
            
            let sacar = prompt("¿Cuánto dinero desea retirar de la cuenta?");

            while (sacar == null || /\D/.test(retiro)) {
                sacar = prompt("Intente de nuevo: ");
            };

            if(sacar == "" ){
                sacar = 0;
            }

  
            let dineroAretirar = localInt(ingresoCuentas.saldo) - localInt(retiro);

       
            if(dineroAretirar < 10){
                Swal.fire({
                    title: '¡No disponible!',
                    html: `<b> La cuenta no puede tener una cantidad menos a $10 </b>`,
                    widht: '90%',
                });
            }
            else{
                alert(`Usted tiene en cuenta un total de $${dineroAretirar}`)
            localStorage.setItem("usuarioLogeado", JSON.stringify({
                ...inglesoCuentas,
                saldo: dineroAretirar
            }))
            console.log(dineroAretirar);
            }
            
        }
    })
}

const cerrarSesion = () => {
    localStorage.clear()
    const inicio = document.getElementById("inicio-usuarios");
    inicio.classList.remove("d-none")
    const funciones = document.getElementById("funciones");
    funciones.classList.add("d-none");
}