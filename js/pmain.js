
let perro = document.getElementById("perros");
perro.innerHTML = "Perros";
let razasPerro = document.getElementById("razas de Perros")
razasPerro.innerHTML = "Existen más de 100 razas de perros en todo el mundo, algunas tienen varias sub-razas"
let h4 = document.getElementById("parrafoPerros");
h4.innerHTML = "Entre las más conocidas se encuentran: Golden Retriever,Dalmatian,Bulldog,Doberman Pinscher."
let perrosGatos = document.getElementById("perrosGatos");
perrosGatos.innerHTML = "Perros Gatos";
let galleriaPerros= document.getElementById("galleriaPerros");
galleriaPerros.innerHTML="Gatos";
let nombrePerro = document.getElementById("perroUno");
nombrePerro.innerHTML= "Dog Perro";
let descripcionPerro =document.getElementById("descripcionPerro");
descripcionPerro.innerHTML= "El mejor amigo del hombre";
let descripcionPerroDos = document.getElementById("descripcionPerroDos");
descripcionPerroDos.innerHTML= "Animal domestico con tamaño y formas diferentes, con pelaje diverso y un olfato bien desarrollado";

//const URL = 'https://api-ninjas.com/api?&O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy';
//const URL_IMAGENES='https://api-ninjas.com/images/dogs?&O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy';

let dogBreedNames = ['golden retriever','dalmatian','bulldog','doberman pinscher'];

async function fetchdata(breedName){
    let url = `https://api.api-ninjas.com/v1/dogs?name=${breedName}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy;`
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
        let imagenPerro = document.getElementById(`imagen${i}`);
        imagenPerro.src = json[0]["image_link"];    
        let h5 = document.getElementById(`nombreDeRaza${i}`);
        h5.innerHTML = json[0]["name"];
        let trainability = trainabilityDescription(json[0]["trainability"]);
        let barking =barkingDescription(json[0]["barking"]); 
        let energy = energyDescription(json[0]["energy"]);
        let contenidoDescripcion = `Esta raza ${trainability}, ${barking} y ${energy}`;
        let description = document.getElementById(`descripcionRaza${i}`);
        description.innerHTML= contenidoDescripcion;

        console.log(contenidoDescripcion);       
        
          
    }
   
}
razaPerro();


function trainabilityDescription(trainability)
{
    let description = "";
    switch(trainability) {
            case 1:
            description = "no es muy dificil de entrenar";
            break;
            case 2:
            description = "asimila poco el entrenamiento";
            break;
            case 3:
            description = "asimila algunas cosas en el entrenamiento";
            break;
            case 4:
                description = "es buena para entrenarse";
                break;
            case 5:
            description = "es muy facil de entrenar";
            break;
      }
    return description;
}


function barkingDescription(barking)
{
    let description = "";
    switch(barking) {
            case 1:
            description = "ladra muy poco";
            break;
            case 2:
            description = "ladra poco";
            break;
            case 3:
            description = "ladra medianamente";
            break;
            case 4:
                description = "ladra frecuentemente";
                break;
            case 5:
            description = "ladra siempre ";
            break;
      }
    return description;
}


function energyDescription(energy)
{
    let description = "";
    switch(energy) {
            case 1:
            description = "tiene poca energia";
            break;
            case 2:
            description = "tiene energia";
            break;
            case 3:
            description = "tiene energia medianamente";
            break;
            case 4:
                description = "es energico";
                break;
            case 5:
            description = "es muy energico ";
            break;
      }
    return description;
}
