/* let titulo = document.getElementById("titulo")
let subtitulo = document.getElementById("subtitulo")

const lista = document.getElementsByClassName("pais")

console.dir(lista)


for (const elemento of lista) {
    //elemento.iinerHTML="Clase nueva"
   //console.log(elemento.iinerHTML)
    /*elemento.innerText = "Interactuar con HTML"*/
   // elemento.className = "red"
    //console.log(elemento)
//} 

//let contenedor = document.getElementById("contenedor")

//let parrafo = document.createElement ("p")

//parrafo.innerHTML = "<h2> Bienvenidos</h2>"
//contenedor.append(parrafo)

//const lista = document.getElementsByTagName("li")

//for (const element of lista){
    //if(element.innerHTML === "C")
  //  element.remove()
    //console.log(element.innerHTML)
//}

//const elemento = document.getElementById("C")

//elemento.remove()



//const nombre = document.getElementById("nombre").value="Mauro"

//const edad = document.getElementById("edad").value="26"

//console.log(nombre)
//console.log(edad)

 const nombre = prompt ('Ingresa tu nombre')

const edad ="21"

const texto =   `nombre : ${nombre} ----- ------ edad: ${edad} `

console.log(texto)


let contenedor = document.getElementById("contenedor")

let parrafo = document.createElement("p")

parrafo.innerHTML = ` 
<h2>${nombre}</h2>
 <h1>${edad}</h1> 
<h6>${texto}</h6>  
`
 
 contenedor.append(parrafo)

let = elemento = document.querySelector('#contenedor p')

console.log(elemento)


