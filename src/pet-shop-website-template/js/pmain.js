let perro = document.getElementById("perros");
perro.innerHTML = "Perros";
let razasPerro = document.getElementById("razas de Perros")
razasPerro.innerHTML = "Existen más de 100 razas de perros en todo el mundo, algunas tienen varias sub-razas"
let h4 = document.getElementById("parrafoPerros");
h4.innerHTML = "Entre las más conocidas se encuentran.Affenpinscher. Bulldog. Chihuahua.Doberman.Labrador. Espaniel.Retriever.Poodle. Pitbull. Pinscher."

const URL = 'https://api-ninjas.com/api?&O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy';
//const URL_IMAGENES= 'https://dog.ceo/api/breeds/image/random/10';

var dogBreedNames = ['golden retriever', 'dalmatian']

async function fetchdata(breedName){
    let url = `https://api.api-ninjas.com/v1/dogs?name=${breedName}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy`;
    const dogData = await fetch(url); //el array tiene 24 valores
    const json = await dogData.json();
    return json;
}

async function razaPerro()
{
    for(let i = 0; i < dogBreedNames.length; i++){
        let json = await fetchdata(dogBreedNames[i]);
        //let dogBreedNameTitle= document.getElementById(`dogNameTitle${i}`)
        //dogBreedNameTitle.innerHTML = json[0]["name"];
        //let divDog = document.getElementById(`dogDescription${i}`);
        //divDog.innerHTML = "";
        console.log(trainabilityDescription(json[0]["trainability"]));    
    }
   
}
razaPerro();

async function imagenPerro(json){
  
    
}
imagenPerro();


function trainabilityDescription(trainability)
{
    let description = "";
    switch(trainability) {
            case 1:
            description = "no es muy entrenable";
            break;
            case 2:
            description = "es algo entrenable";
            break;
            case 3:
            description = "es mediocre en el entrenamiento";
            break;
            case 4:
                description = "es bueno para entrenarse";
                break;
            case 5:
            description = "es muy facil de entrenar";
            break;
      }
    return description;
}
