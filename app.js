// import functions and grab DOM elements
const waterImage = document.getElementById('waterimage');
const cityImage = document.getElementById('cityimage');
const forestImage = document.getElementById('forestimage');

const sloganInput = document.getElementById('putsloganshere');
const sloganButton = document.getElementById('sloganbutton');
const sloganContainer = document.getElementById('slogancontainer');

const cityButton = document.getElementById('citybutton');
const cityName = document.getElementById('cityname');

const waterDropD = document.getElementById('water-dropdown');
const cityDropD = document.getElementById('city-dropdown');
const forestDropD = document.getElementById('forest-dropdown');

const changeCounter = document.getElementById('timeschanged');

// let state
let waterChanges = 0;
let cityChanges = 0;
let forestChanges = 0;
let sloganArr = [];
let cityNameVar = 'Genericsburg';

cityName.textContent = `Choose your own Vacation Adventure in ${cityNameVar}...`;

displayCountStats();
// set event listeners 

waterDropD.addEventListener('change', () => {
    waterImage.src = `assets/water-${waterDropD.value}.jpg`;
    waterChanges++;
    displayCountStats();
});

cityDropD.addEventListener('change', () => {
    cityImage.src = `assets/city-${cityDropD.value}.jpg`;
    cityChanges++;
    displayCountStats();
});

forestDropD.addEventListener('change', () => {
    forestImage.src = `assets/forest-${forestDropD.value}.jpg`;
    forestChanges++;
    displayCountStats();
});

sloganButton.addEventListener('click', () => {
    if (sloganInput.value === ''){
        alert('Type Something!');
            
    } else {
        let newSlogan = sloganInput.value;

        sloganArr.push(`${newSlogan}`);
    
        sloganInput.value = '';

        displaySlogans();

    }
    


});

cityButton.addEventListener('click', () => {
    if (sloganInput.value === ''){
        alert('Type Something!');
            
    } else {
        cityNameVar = sloganInput.value;
    
        cityName.textContent = `Choose your own Vacation Adventure in ${cityNameVar}...`;
    
        sloganInput.value = '';
    }


});



function displaySlogans(){

    sloganContainer.innerHTML = '';

    for (let slogan of sloganArr){
        const pTag = document.createElement('p');

        pTag.classList.add('slogan');
        pTag.textContent = `${cityNameVar}: ${slogan}`;

        sloganContainer.append(pTag);
    }

}

function displayCountStats(){
    changeCounter.textContent = `You've changed the top picture ${waterChanges} times, the middle picture ${cityChanges} times, and the bottom picture ${forestChanges} times.`;
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
