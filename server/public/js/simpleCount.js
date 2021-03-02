// fetch APi to get current counts
document.addEventListener("DOMContentLoaded", getCount);

// hit API to add to count
document.querySelector(".simpleCount-btn").addEventListener("click", addCount);

function getCount() {
  axios.get('https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e-Test/purpleCount').then(responce => {
        document.querySelector(".simpleCount").innerHTML = responce.data.value;
    });
}

// hits api to increase current count and injects result to HTML
function addCount() {
  axios.get('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e-Test/purpleCount').then(responce => {
        document.querySelector(".simpleCount").innerHTML = responce.data.value;
    });
}
