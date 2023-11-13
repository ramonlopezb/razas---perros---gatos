console.log("hello world");
let perro = document.getElementById("perros");
perro.innerHTML = "Perros";
let razasPerro = document.getElementById("razas de Perros")
razasPerro.innerHTML = "Existen más de 100 razas de perros en todo el mundo, algunas tienen varias sub-razas"
let h4 = document.getElementById("parrafoPerros");
h4.innerHTML = "Entre las más conocidas se encuentran.Affenpinscher. Bulldog. Chihuahua.Doberman.Labrador. Espaniel.Retriever.Poodle. Pitbull. Pinscher."

const URL = 'https://dog.ceo/api/breeds/list/all';
const URL_IMAGENES= 'https://dog.ceo/api/breeds/image/random/10';


async function razaPerro(){
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    
}
razaPerro();

async function imagenPerro(){
    const res = await fetch(URL_IMAGENES);
    const data =await res.json();
    console.log(data);
    let imagenesPerros = data["message"];
    console.log(imagenesPerros);
    let imgPerros = document.getElementById("imagenGeneralPerros");
    imgPerros.src = imagenesPerros[2];
    
}
imagenPerro();



