class IS{
    constructor(usuario,contraseña,validacion){
        this.usuario = usuario;
        this.contraseña = contraseña;
        this.validacion = validacion;
    }

}
let entrada;
let empresa1 ;
const equiposMovistar=[];
const equiposTelecentro=[];
const equiposDtv=[];

alert("Bienvenido Cree su usuario")

const usuario1 = [];
usuario1.push(new IS(prompt("Ingrese su nombre de usuario:"), prompt("Ingrese su contraseña:"),prompt("Ingrese nuevamente su contraseña:"))); 

for (const usuario of usuario1) {
    while (usuario.contraseña != usuario.validacion) {
        usuario.validacion = prompt("Hubo un error,Ingrese nuevamente su contraseña: ")
    }
}
    alert("Ingrese los equipos de movistar");
        do{
            do {
                entrada = (prompt("Ingrese el n° de equipo o  0 para finalizar:").toUpperCase())
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
        equiposMovistar.pop();

usuario1.push(equiposMovistar)

        alert("Ingrese los equipos de telecentro");
        do{
            do{
                entrada = (prompt("Ingrese el n° de equipo o 0 para finalizar:").toUpperCase())
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
                    entrada = (prompt("Ingrese el n° de equipo o 0 para finalizar:").toUpperCase())
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
            }