// fetch APi to get current counts
document.addEventListener("DOMContentLoaded", getDays);

// hit API to add to count
document.querySelector(".goodDay-btn").addEventListener("click", goodDay);
document.querySelector(".badDay-btn").addEventListener("click", badDay);

/* --- Tug-of-Day --- */
function getDays() {
  axios.get('https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay').then(response => {
        //console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    }).catch(error => {
        errorMessage();
        if(error.response.status == 404) {
            initilizeCounter();
        }
    });
}

function goodDay() {
  axios.get('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay').then(response => {
        //console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    }).catch(error => {
        errorMessage();
    });
}

function badDay() {
  axios.get('https://api.countapi.xyz/update/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay?amount=-1').then(response => {
        console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    }).catch(error => {
        errorMessage();
    });
}

// by default the counters can't decrease, thus in this special case the counter needs to be initilized with extra options enabled
function initilizeCounter(){
    axios.get('https://api.countapi.xyz/create?namespace=1ccb732e-b55a-4404-ad3f-0f99c02fe44e&key=moodDay&enable_reset=1')
    .then(response => { 
        console.log(response); 
    }).catch(error => {
        document.querySelector(".tug-days").innerHTML = 0;
        return;
    });
    
}

function errorMessage() {
    document.querySelector(".tug-days").innerHTML = '[ There was an error, please try later ]';
}