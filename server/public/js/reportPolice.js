// hit API to get/add count
document.querySelector(".abuseCount-btn").addEventListener("click", getReport);
document.querySelector(".abuseReprt-btn").addEventListener("click", addReport);

/* --- Police Abuse INdex - P.A.IN --- */
function getReport() {
    // reset the output field to give a visual cue to the user that the output was refreshed
    document.querySelector(".abuseCount").innerHTML = '...';
    var badgeId = readBadgeId();
    if(!badgeId){
        return;
    }

    // gets current count for given ID
    axios.get('https://api.countapi.xyz/get/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/'+badgeId)
    .then(response => {
        document.querySelector(".abuseCount").innerHTML =  'Badge ID #'+badgeId+' has '+ 
            response.data.value+((response.data.value == 1) ? ' report.' : ' reports.');
    })
    .catch(error => {
        if(error.response.status == 404) {
            document.querySelector(".abuseCount").innerHTML = '[ No reported cases for this badge ID # ]';
        } else if(error.response.status == 400) {
            document.querySelector(".abuseCount").innerHTML = '[ Invalid badge id #. Min 3 alphanumeric characters  ]';
        } else {
            document.querySelector(".abuseCount").innerHTML = '[ There was an error, please try later ]';
        }
    });
}

function addReport() {
    document.querySelector(".abuseCount").innerHTML = '...';
    var badgeId = readBadgeId();
    if(!badgeId){
        return;
    }
    axios.get('https://api.countapi.xyz/hit/1ccb732e-b55a-4404-ad3f-0f99c02fe44e/'+badgeId)
    .then(response => {
        document.querySelector(".abuseCount").innerHTML = 'Your report was submitted, </br> New report count for badge id #'+badgeId+' is '+response.data.value;
    }).catch(error => {
        if(error.response.status == 404) {
            document.querySelector(".abuseCount").innerHTML = '[ No reported cases for this badge ID # ]';
        } else if(error.response.status == 400) {
            document.querySelector(".abuseCount").innerHTML = '[ Invalid badge id #. Min 3 alphanumeric characters  ]';
        } else {
            console.log('Response status in error '+error.response.status);
            document.querySelector(".abuseCount").innerHTML = '[ There was an error, please try later ]';
        }
    });
}

function readBadgeId() {
    var badgeId = document.getElementById("badgeId").value.replace(/ /g, '');
    if(badgeId == ''){
        document.querySelector(".abuseCount").innerHTML = '[ Invalid badge id #. Min 3 alphanumeric characters  ]';
        return false;
    }
    console.log(badgeId);
    return badgeId;
}