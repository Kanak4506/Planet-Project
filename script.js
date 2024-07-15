const massInput = (document.querySelector('#mass'));
const planet_selected = (document.querySelector('.planets'));
const result = document.querySelector('.result_mass')
const calculate_button = document.querySelector('.calculate');
const planet_image = document.querySelector('#planet_image');
const selected_planet_result = document.querySelector('.selected_planet_result');
const selected_planet_mass = document.querySelector('.selected_planet_mass');
const starting_index_image = document.querySelector('.starting');
const planet_container = document.querySelector('.planet_container');
const hide_msg = document.querySelector('.hide')

planet_container.style.display = 'none';


function calculateMass() {
    starting_index_image.style.display = 'none';


    const mass = parseFloat(massInput.value);
    const gravity = parseFloat(planet_selected.value);
    const planet_name = planet_selected.options[planet_selected.selectedIndex].text;
    const imageUrl = planet_selected.options[planet_selected.selectedIndex].getAttribute('data-image');


    if (mass <= 0 || isNaN(mass)) {
        hide_msg.innerText = "Please enter a valid mass number";
        hide_msg.style.display = 'block'

        planet_container.style.display = 'none';
        return;
    }

    if ( isNaN(gravity) ) {
        hide_msg.innerText = 'Please select a planet';
        hide_msg.style.display = 'block';

        planet_container.style.display = 'none';
    }
    const result_finally = (mass * gravity).toFixed(2);
    selected_planet_result.innerText = `The weight of object on ${planet_name}`;
    selected_planet_mass.innerText = `${result_finally}`;
    planet_container.style.display = 'flex';

    if(isNaN(result_finally)) {
        planet_container.style.display = 'none';
    }

    planet_image.src = imageUrl;

}

calculate_button.addEventListener('click', calculateMass);
