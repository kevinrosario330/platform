
var profileBody = document.getElementById('profileId');
var eventStationId = document.getElementById('eventFormBoxId');

var eventButton = document.getElementById('addEventBtn');
var eventsContainer = document.getElementById('eventsContainerId');
var eventBox = document.getElementById('eventBoxId');
var dates =  document.querySelectorAll(".td");

const monthDisplay = document.getElementById('month');
const prevButton = document.getElementById('leftSlideId');
const nextButton = document.getElementById('rightSlideId');
const yearDisplay = document.getElementById('year');


eventButton.addEventListener("click", createEvent);
var dateSelection = null;
monthSlider();
addEventDates();



function profileView(){
    profileBody.style.left = "0px";
    eventStationId.style.left = "400px";

    console.log('hey boy');
}




function eventsView(){

    profileBody.style.left = "400px";
    eventStationId.style.left = "0px";
    console.log('hey');
}


function createEvent(){


    var boxEvent = document.createElement('div');
    boxEvent.classList.add("eventBox");

    var boxRightSide = document.createElement('div');
    boxRightSide.classList.add("eventBoxRightSide");

    var boxLeftSide = document.createElement('div');
    boxLeftSide.classList.add("eventBoxLeftSide");

const boxImage = document.createElement('img');
const file = document.getElementById('image-input').files[0];
const boxImageUrl = URL.createObjectURL(file);
 boxImage.src = boxImageUrl;
    boxLeftSide.appendChild(boxImage);
    boxEvent.appendChild(boxLeftSide);



    var titleInput = document.getElementById("boxTitle").value;
    var timeInput = document.getElementById("boxTime").value;
    var title = document.createElement('p');
    var time = document.createElement('p');
    var dateText = document.createElement('p')
    dateText.setAttribute('id','boxTime');
        let text = " de ";

    dateText.textContent = dateSelection + text + monthDisplay.textContent;
    title.textContent = titleInput;
    time.textContent = timeInput;

    boxRightSide.appendChild(title);
    boxRightSide.appendChild(time);
    boxRightSide.appendChild(dateText);
    boxEvent.appendChild(boxRightSide);

    eventsContainer.appendChild(boxEvent);
                console.log(dateText);

}

function monthSlider(){



const months = [
"Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let currentMonthIndex = new Date().getMonth();

monthDisplay.textContent = months[currentMonthIndex];

// Event listeners for buttons
prevButton.addEventListener('click', () => {
currentMonthIndex = (currentMonthIndex - 1 + 12) % 12;
monthDisplay.textContent = months[currentMonthIndex];

});

nextButton.addEventListener('click', () => {
currentMonthIndex = (currentMonthIndex + 1) % 12;
monthDisplay.textContent = months[currentMonthIndex];

});
}



function  addEventDates(){
for (let i = 0; i < dates.length; i++) {

    dates[i].addEventListener("click", function(){


 dates.forEach(item => {
        item.style.background = " rgb(246, 246, 246)";
      })
      dateSelection = this.textContent;
       this.style.background = "gray";   
 console.log(this.textContent )

 })
   
   

   

}
}

