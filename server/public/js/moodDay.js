// fetch APi to get current counts
document.addEventListener("DOMContentLoaded", getDays);

// hit API to add to count
document.querySelector(".goodDay-btn").addEventListener("click", goodDay);
document.querySelector(".badDay-btn").addEventListener("click", badDay);

function getDays() {
  axios.get('https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay1').then(response => {
        console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    });
}

function goodDay() {
  axios.get('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay1').then(response => {
        console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    });
}

function badDay() {
  axios.get('https://api.countapi.xyz/update/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/moodDay1?amount=-1').then(response => {
        console.log(response);
        document.querySelector(".tug-days").innerHTML = response.data.value;
    });
}