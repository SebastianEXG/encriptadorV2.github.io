function encriptar() {
    var txt_base = document.querySelector("#texto-usuario").value; 
    var txt_Encriptado = txt_base.replace(/e/, "enter").replace(/i/, "imes").replace(/a/, "ai").replace(/o/, "ober").replace(/u/, "ufat");
    document.querySelector(".salida_texto").value = txt_Encriptado;
    document.querySelector("#texto-usuario").value = "";
    
} 

function desencriptar () {
    var txt_Encriptado = document.querySelector("#texto-usuario").value; 
    var txt_normal = txt_Encriptado.replace(/enter/, "e").replace(/imes/,"i").replace(/ai/, "a").replace(/ober/,"o").replace(/ufat/,"u"); 
    document.querySelector(".salida_texto").value = txt_normal; 
    document.querySelector("#texto-usuario").value = "";
}

function copiar () {
    var copiarTexto = document.querySelector(".salida_texto"); 
    copiarTexto.select(); 
    document.execCommand("copy")
}

var btn1 = document.querySelector("#boton1"); 
var btn2 = document.querySelector("#boton2");  

var btn3 = document.querySelector("#boton3"); 
btn3.onclick = copiar; 

btn1.onclick = encriptar; 
btn2.onclick = desencriptar; 




