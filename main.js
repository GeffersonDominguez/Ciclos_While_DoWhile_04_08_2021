do{
    let usuario = prompt("Ingrese el usuario");
    let contrasena = prompt("Ingrese el contraseña");
    var bandera = {
        usuario: usuario!="Miguel",
        contrasena: contrasena!="123",
        condicion: usuario!="Miguel" || contrasena!="123"
    };
    if(!bandera.condicion) alert(`Bienvenido Usario`);
    if(bandera.usuario) alert(`El usuario ${usuario} no existe`);
    if(bandera.contrasena) alert(`La contraseña ${contrasena} no existe`);

}while(bandera.condicion);







// while(true){
//     if(prompt("Ingrese un numero")==3){
//         break;
//     }
// }



// let papitas = 10;
// while(papitas>=0){
//     console.log(`Tengo ${papitas} papitas`);
//     papitas--;
// }