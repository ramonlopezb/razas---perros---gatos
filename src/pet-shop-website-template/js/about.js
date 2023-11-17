console.log("hello world");
/*let perrosGatos = document.getElementById("perrosGatos");
perrosGatos.innerHTML= "Perros/Gatos";
let perros = document.getElementById("perros");
perros.innerHTML = "Perros"
let galleriaPerros = document.getElementById("galleriaPerros");
galleriaPerros.innerHTML = "Galleria Perros";
let dogBreedNames = ['golden retriever','dalmatian','bulldog','doberman pinscher'];*/
let catBreedNames = ['manx','lykoi','sphynx','maine','Turkish Angora'];
console.log(catBreedNames);
console.log("gatos");

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
        let imagenGato = document.getElementById(`imagen${i}`);
        imagenGato.src = json[0]["image_link"];    
        let h5 = document.getElementById(`nombreDeRazaGato${i}`);
        h5.innerHTML = json[0]["name"];
        console.log(trainabilityDescription(json[0]["shedding"]));
        console.log(barkingDescription(json[0]["playfulness"])); 
        console.log(energyDescription(json[0]["grooming"])); 
          
    }   
}
razaGato();

function trainabilityDescription(shedding)
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


function barkingDescription(playfulness)
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


function energyDescription(grooming)
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

