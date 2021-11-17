const URL = 'https://rickandmortyapi.com/api/character/';
const selet_name = document.querySelector('.selet_name');
const characteres = document.querySelector('.characteres');
const person_container = document.querySelector('.box');

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
            person_container.innerHTML='';

            data.results.map(event => {
                create_card(event)
            })
        }
        else{
            data.results.map(event =>{
                if(event.name === name_select){
                    person_container.innerHTML='';
                    create_card(event) 
                    
                }
            })
        }
    }) 
}
const data = []
function create_card(data){
    const card = document.createElement('div');
    const name = document.createElement('h2');
    const imagecard = document.createElement('img');
    const gender = document.createElement('p');

    name.textContent =data.name;
    imagecard.setAttribute('id', data.id);
    imagecard.setAttribute('src', data.image);
    imagecard.setAttribute('alt', data.name);
    gender.textContent= data.gender;

    card.appendChild(name);
    card.appendChild(imagecard);
    card.appendChild(gender);

    person_container.appendChild(card);

}


