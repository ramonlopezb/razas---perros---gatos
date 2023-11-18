console.log("hello world");
//let perrosGatos = document.getElementById("perrosGatos");
//perrosGatos.innerHTML= "Perros/Gatos";
let perros = document.getElementById("perros");
perros.innerHTML = "Perros"
let galleriaPerros = document.getElementById("galleriaPerros");
galleriaPerros.innerHTML = "Gatos";
//let dogBreedNames = ['golden retriever','dalmatian','bulldog','doberman pinscher'];*/
let catBreedNames = ['manx','lykoi','sphynx','maine','Turkish Angora'];
let nombreDeRaza = 'burmilla';


async function fetchdata(name){
    let url = `https://api.api-ninjas.com/v1/cats?name=${name}&X-Api-Key=O4TWrUym6Vu5qX5MdTtaoQ==qzxgRdqGOBrv3VJy;`
    const catData = await fetch(url); 
    const json = await catData.json();
    console.log(json);
    return json;
}

async function razaGato()
{
    for(let i = 0; i < catBreedNames.length; i++){
        
        let json = await fetchdata(catBreedNames[i]);
        //let dogBreedNameTitle= document.getElementById(`dogNameTitle${i}`)
        //dogBreedNameTitle.innerHTML = json[0]["name"];
        //let divDog = document.getElementById(`dogDescription${i}`);
        //divDog.innerHTML = "";
        let imagenes= document.getElementById(`imagen${i}`);
        imagenes.src = json[0]["image_link"];    
        let h5 = document.getElementById(`nombreDeRazaGato${i}`);
        h5.innerHTML = json[0]["name"];
        let shedding = sheddingDescription(json[0]["shedding"]);
        let playfulness = playfulnessDescription(json[0]["playfulness"]); 
        let grooming = groomingDescription(json[0]["grooming"]); 
        let contenidoDescripcionGato =`Esta Raza ${shedding},${playfulness} y ${grooming}`;
        let descripcion = document.getElementById(`descripcionRaza${i}`);
        descripcion.innerHTML = contenidoDescripcionGato;
          
    }   
}
razaGato();

async function buscarYAsignarImagenGato(){
    let json = await fetchdata(nombreDeRaza);
    let imagenGato = document.getElementById("imagenGato");
    imagenGato.src = json[0]["image_link"];
}
buscarYAsignarImagenGato();

function sheddingDescription(shedding)
{
    let description = "";
    switch(shedding) {
            case 1:
            description = "no arroja  pelo";
            break;
            case 2:
            description = "arroja poco pelo";
            break;
            case 3:
            description = "puede arrojar pelo";
            break;
            case 4:
                description = "arroja pelo";
                break;
            case 5:
            description = "arroja mucho pelo";
            break;
      }
    return description;
}


function playfulnessDescription(playfulness)
{
    let description = "";
    switch(playfulness) {
            case 1:
            description = "es muy serio";
            break;
            case 2:
            description = "pocas veces muestra alegria";
            break;
            case 3:
            description = "es alegre en algunas ocasiones";
            break;
            case 4:
                description = "es alegre";
                break;
            case 5:
            description = "es muy alegre ";
            break;
      }
    return description;
}


function groomingDescription(grooming)
{
    let description = "";
    switch(grooming) {
            case 1:
            description = "es muy dificil para asear";
            break;
            case 2:
            description = "dificil de asear";
            break;
            case 3:
            description = "requiere esfuerzo para asear";
            break;
            case 4:
                description = "se puede asear con poco esfuerzo";
                break;
            case 5:
            description = "es muy facil asear ";
            break;
      }
    return description;
}

