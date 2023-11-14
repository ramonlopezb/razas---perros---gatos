let perro = document.getElementById("perros");
perro.innerHTML = "Perros";
let razasPerro = document.getElementById("razas de Perros")
razasPerro.innerHTML = "Existen más de 100 razas de perros en todo el mundo, algunas tienen varias sub-razas"
let h4 = document.getElementById("parrafoPerros");
h4.innerHTML = "Entre las más conocidas se encuentran.Affenpinscher. Bulldog. Chihuahua.Doberman.Labrador. Espaniel.Retriever.Poodle. Pitbull. Pinscher."

const URL = 'https://api-ninjas.com/api?&O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy';
//const URL_IMAGENES= 'https://dog.ceo/api/breeds/image/random/10';

var name = 'golden retriever'

async function fetchdata(breedName){
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/dogs?name=' + breedName,
        headers: { 'X-Api-Key': 'O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
}

async function razaPerro(){
    
    console.log(fetchdata("golden retriever"));
    
}
razaPerro();

async function imagenPerro(){
    const res = await fetch(URL_IMAGENES);
    const data =await res.json();
   // console.log(data);
    let imagenesPerros = data["message"];
    console.log(imagenesPerros);
    let imgPerros = document.getElementById("imagenGeneralPerros");
    imgPerros.src = imagenesPerros[2];
    
}
imagenPerro();



