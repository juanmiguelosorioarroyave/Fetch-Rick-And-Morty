const URL = 'https://rickandmortyapi.com/api/character/';
const selet_name = document.querySelector('.selet_name');
const characteres = document.querySelector('.characteres');
const body = document.getElementById("main");

selet_name.addEventListener('click', new_option);
new_charact();


function new_charact(){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        data.results.map((element) => {
            const ide =document.createElement('option');

            ide.value = element.name;

            ide.textContent= element.name;

            selet_name.appendChild(ide);
        })
    })
}
 function new_option(){
    const name_select = selet_name.value;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        if (name_select === characteres.value){
            body.innerHTML='';

            data.results.map(event => {
                create_card(event)
            })
        }
        else{
            data.results.map(event =>{
                if(event.name === name_select){
                    body.innerHTML='';
                    create_card(event) 
                    
                }
            })
        }
    }) 
}
function create_card(data) {

 const card = document.createElement('div');
 const name = document.createElement('h2'); 
 const genero = document.createElement('p'); 
 const image_card = document.createElement('img');

 card.setAttribute('id','card');
 name.setAttribute('id','name');
 genero.setAttribute('id','genero');
 image_card.setAttribute('id','image');

 name.textContent = data.name;
 image_card.setAttribute("src", data.image);
 image_card.setAttribute("alt", data.name);
 genero.textContent = data.gender;
 card.appendChild(name);
 card.appendChild(genero);
 card.appendChild(image_card);
 body.appendChild(card); 
}


