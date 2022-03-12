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

const waterArr = [{ display: 'Harbor', value: '1' }, { display: 'Friendly Wildlife', value: '2' }, { display: 'Catching a Wave', value: '3' }];
const cityArr = [{ display: 'Island Town', value: '1' }, { display: 'Castle 64', value: '2' }, { display: 'Hilltop Castle', value: '3' }];
const forestArr = [{ display: 'Forest Walkway', value: '1' }, { display: 'Treetop Treasures', value: '2' }, { display: 'Forest Clearing', value: '3' }];

const dayButton = document.getElementById('daymode');
const nightButton = document.getElementById('nightmode');

var audio = new Audio('assets/nighttime.mp3');
var audio2 = new Audio('assets/daytime.mp3');

// let state
let waterChanges = 0;
let cityChanges = 0;
let forestChanges = 0;
let sloganArr = [];
let cityNameVar = '';

audio2.play();

for (let dropD of waterArr){
    const option = document.createElement('option');

    option.classList.add('dropD');
    option.textContent = dropD.display;
    option.value = dropD.value;

    waterDropD.append(option);
}

for (let dropD of cityArr){
    const option = document.createElement('option');

    option.classList.add('dropD');
    option.textContent = dropD.display;
    option.value = dropD.value;

    cityDropD.append(option);
}

for (let dropD of forestArr){
    const option = document.createElement('option');

    option.classList.add('dropD');
    option.textContent = dropD.display;
    option.value = dropD.value;

    forestDropD.append(option);
}

//cityName.textContent = `Choose your own Vacation Adventure in ${cityNameVar}...`;

displayCountStats();
// set event listeners 

waterDropD.addEventListener('change', () => {
    waterImage.src = `assets/water-${waterDropD.value}.jpg`;
    waterChanges++;
    displayCountStats();
    updateMode();
});

cityDropD.addEventListener('change', () => {
    cityImage.src = `assets/city-${cityDropD.value}.jpg`;
    cityChanges++;
    displayCountStats();
    updateMode();
});

forestDropD.addEventListener('change', () => {
    forestImage.src = `assets/forest-${forestDropD.value}.jpg`;
    forestChanges++;
    displayCountStats();
    updateMode();
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

dayButton.addEventListener('change', function(){
    updateMode();
});

nightButton.addEventListener('change', function(){
    updateMode();
});

function updateMode(){
    if (nightButton.checked){
        waterImage.src = `assets/water-${waterDropD.value}N.jpg`;
        cityImage.src = `assets/city-${cityDropD.value}N.jpg`;
        forestImage.src = `assets/forest-${forestDropD.value}N.jpg`;
        audio.play();
        audio2.pause();
    } else {
        waterImage.src = `assets/water-${waterDropD.value}.jpg`;
        cityImage.src = `assets/city-${cityDropD.value}.jpg`;
        forestImage.src = `assets/forest-${forestDropD.value}.jpg`;
        audio.pause();
        audio2.play();
    }
}

function displaySlogans(){

    sloganContainer.innerHTML = '';

    for (let slogan of sloganArr){
        const pTag = document.createElement('p');

        pTag.classList.add('slogan');
        if (cityNameVar === ''){
            pTag.textContent = `${slogan}`;
        } else {
            pTag.textContent = `${cityNameVar}: ${slogan}`;
        }
        

        sloganContainer.append(pTag);
    }

}

function displayCountStats(){
    changeCounter.textContent = `You've changed the top picture ${waterChanges} times, the middle picture ${cityChanges} times, and the bottom picture ${forestChanges} times.`;
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
