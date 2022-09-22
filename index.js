class IS{
    constructor(usuario,contraseña,validacion){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.validacion = validacion;
    }

}

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	contraseña: /^.{4,12}$/, // 4 a 12 digitos.
}

let entrada;
let contenedor_inicio=document.querySelector(".contenedor_inicio");
let formulario_login = document.querySelector(".formulario_login");
let contenedor_login = document.querySelector(".contenedor_login");
let mvt = document.querySelector(".contenedor_mvt")
const formulario= document.querySelector("#formulario");
const inputs= document.querySelectorAll ("#formulario input")
const scanMvt= document.getElementById("scanMvt");
const fMvt=document.querySelector(".mvt")
const usuario1 = [];
const equiposMovistar=[];
const equiposTelecentro=[];
const equiposDtv=[];
const respuesta= document.getElementById("respuesta")
const campos={
    usuario:"false",
    contraseña: "false"
}

//mis funciones
const validarFormulario = (e) => {
    switch (e.target.id) {
        case "usuario":
            validarcampo(expresiones.usuario,e.target,"usuario");
        break;
        case "contraseña":
            validarcampo(expresiones.contraseña,e.target,"contraseña");
        break;
        case "validacion":
            validarcontraseña();
        break;
    }
}
const validarcampo = (expresion,input,campo) =>{
    if (expresion.test(input.value)) {
            document.querySelector(`.form_grupo${campo}`).classList.remove("form_grupoIncorrecto-activo");
            document.querySelector(`.grupo_${campo}`).classList.remove("form_error");
            campos[campo]= true;
    } else{
            document.querySelector(`.form_grupo${campo}`).classList.add("form_grupoIncorrecto-activo");
            document.querySelector(`.grupo_${campo}`).classList.add("form_error");
            campos[campo]= false;
            }
}
const validarcontraseña = () =>{
    const contraseña= document.getElementById("contraseña");
    const validacion= document.getElementById("validacion");

    if(contraseña.value!== validacion.value){
    document.querySelector(`.form_grupovalidacion`).classList.add("form_grupoIncorrecto-activo");
    document.querySelector(`.grupo_validacion`).classList.add("form_error");
    campos[contraseña]= false;
}else{
    document.querySelector(`.form_grupovalidacion`).classList.remove("form_grupoIncorrecto-activo");
    document.querySelector(`.grupo_validacion`).classList.remove("form_error");
    campos[contraseña]= true;
}
}

function inicio_sesion() {
    formulario_login.style.display= "block";
    contenedor_inicio.style.opacity= "0";
}

//eventos
document.getElementById("btn_iniciar_sesion").addEventListener("click",inicio_sesion);
formulario.addEventListener("submit",registro);
inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});
scanMvt.addEventListener("click",scan);


function registro(e) {
    e.preventDefault();
    if (campos.usuario && campos.contraseña) {
    usuario1.push(document.getElementById("usuario").value,document.getElementById("contraseña").value,document.getElementById("validacion").value);
    formulario.reset();
    formulario_login.style.display= "none";
    mvt.style.display="block";
    }
}
console.log(usuario1);

function scan(e) {
    e.preventDefault();
        entrada=document.getElementById("equipo").value;
        equiposMovistar.push(entrada);
    console.log(equiposMovistar);
    fMvt.reset();
    if (entrada==0) {
        mvt.style.display="none";
        equiposMovistar.pop();
        Swal.fire({
            icon: 'success',
            title: usuario1[0],
            text: "Ingresaste " + equiposMovistar.length + " equipos de movistar",
        })
    }
    
}


/* 1 */



/*function registro () {
    usuario1.push(document.getElementById("usuario").value,document.getElementById("contraseña").value,document.getElementById("validacion").value);
    console.log(usuario1);
}*/



/*alert("Bienvenido Cree su usuario")


usuario1.push(new IS(prompt("Ingrese su nombre de usuario:"), prompt("Ingrese su contraseña:"),prompt("Ingrese nuevamente su contraseña:"))); 

for (const usuario of usuario1) {
    while (usuario.contraseña != usuario.validacion) {
        usuario.validacion = prompt("Hubo un error,Ingrese nuevamente su contraseña: ")
    }
}
    alert("Ingrese los equipos de movistar");
        do{
            do {
                entrada = (prompt("Ingrese el n° de equipo o  0 (cero) para finalizar:").toUpperCase())
                if (entrada==0) 
                {
                i=10;   
                } else {
                    i= entrada.length
                console.log(i);
                }
            } while ((i<10 || i>16)); 
            equiposMovistar.push (entrada)
            console.log(equiposMovistar)
        } while (entrada !=0);
        

usuario1.push(equiposMovistar)

        alert("Ingrese los equipos de telecentro");
        do{
            do{
                entrada = (prompt("Ingrese el n° de equipo o 0 (cero) para finalizar:").toUpperCase())
                if (entrada==0) 
                {
                i=10;   
                } else {
                    i= entrada.length
                console.log(i);
                }
            } while ((i<10 || i>16)); 
            equiposTelecentro.push (entrada)
        } while (entrada !=0);
        equiposTelecentro.pop()
        usuario1.push(equiposTelecentro)

        alert("Ingrese los equipos de directv");
            do{
                do{
                    entrada = (prompt("Ingrese el n° de equipo o 0 (cero) para finalizar:").toUpperCase())
                    if (entrada==0) 
                    {
                    i=10;   
                    } else {
                        i= entrada.length
                    console.log(i);
                    }
                } while ((i<10 || i>16)); 
                equiposDtv.push (entrada)
            } while (entrada !=0);
            equiposDtv.pop()
            usuario1.push(equiposDtv)

            for (const usuario of usuario1) {
                alert(usuario.usuario + " ingreso\n"+ equiposMovistar.length + " equipos de movistar \n"+ equiposTelecentro.length + " equipos de telecentro\n" + equiposDtv.length + " equipos de directv\n ¡Sesion finalizada!" )
            }*/