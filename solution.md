## Project Purple Count ##

# Requirements
# Launch Using 'Single Startup Command'
# Build & Run manually
# Stop and Delete Docker container/images
# Assumptions
# Future Updates
# Outstanding Code
# Tech Stack
# Optional Configuration

# Requirements
- pre-installed Docker
-- if on Windows the windows launch script will attempt to install Docker
- pre-installed Chrome browser
- internet connection to reach API

# Launch Using 'Single Startup Command'
On Windows
1- Execute the 'runProjPurpleCow_win.PS1' script on the project folder $PATH\ProjectPurpleCow\ via Windows PowerShell:
        > .\runProjPurpleCow_win.PS1 start
    
    To run app with custom port please refer to the 'Optional Configuration' section.

    NOTE: If windows machine doesn't allow the execution of the script open PowerShell Window as Administrator and run the following command:
        > Set-ExecutionPolicy RemoteSigned

On Linux
1- Please refer to 'run manually' section

# Build & Run manually
With Docker
- make sure the machine has docker installed
    docker -v
- Download project source
- On $download_path/ProjectPurpleCow directory build and run docker image:
    $ docker build -t count-purple server/
    $ docker run -dp 3000:8080 count-purple
- load localhost:3000 on Chrome, command line:
    $ start chrome 'http://localhost:3000/'

Locally with Yarn
- Start yarn on server/ directory:
    > yarn start
- Open browser and point to: localhost:8080

# Stop and Delete Docker container/images
Via Provided Script
    > .\runProjPurpleCow_win.PS1 stop
    > .\runProjPurpleCow_win.PS1 delete

Manually
- stop app container
    $ docker stop $(docker ps -q --filter ancestor=test-app )   
- delete stopped docker container
    $ docker rm $(docker ps -q -f "ancestor=test-app" -f "status=exited")
- delete docker image
    $ docker rmi test-app

# Assumptions
- API:  App only uses a single API KEY (should be added to Optional Configuration Parameters)
- NO DB:  Samples are not using any kind of Database as needed functionality is accomplished with just the CountApi.  Certain use cases might require a simple DB so store metadata.
- NOT Prod ready:  Although I belive Express JS can be used on a PROD environment there were no efforts made in SECURITY, AVAILABILITY nor PERFORMANCe to cover this case.
- Trusting Users:  There are no measures taken to avoid user abuse of the app (overuse, false report, etc..)

Police Report Sample
- Police Badge IDs assumed to be between 3 - 10 characters.
-- minimum of 3 is due to a limitation with the API (as it's minimum is 3)
-- maximum can be increased and it was arbitrarly imposed on the HTML input element.

# Future Updates
Optimizations / Cleaner Code
- Need to simplify get/hit API code by overloading functions and sending 'get'/'hit' parameters depending on button pressed.
- Merge the 3 js scripts (moodDay.js, reportPolice.js, simpleCount.js) into a single script to avoid code repetition
-- and simplify further by pasing API key to functions in order to only have a single function that connects to the API
- Add API 'key' under customizable parameters

Possible Extra Functionality
- The same functionality used on this project can be used for similar ideas:
-- Anonymous Zip Code Crime Index (report an instance of a crime in a specified zip code, could further be improved by allowing to choose type of crime)
-- Anonymous Phone Number Report (report phone number (just like police badges) and count instances of reports.  Further improved by type of 
   report (scam, sexual assult, abuse of power.. etc.), could be a global service by allowing country indicative on phone number, and with simple DB 
   Dates of reported incidents could be stored)


# Outstanding Code
- linux launch script
- runProjPurpleCow_win.PS1: error checking for 'port number' read from last line of this file
- moodDay.js: Cover special case when API counter has not been initilized (since is a special counter that needs an extra parameter at initialization) 

# Tech Stack
Client-Side
- HTML / CSS / JavaScript

Server-Side
- Node.JS (JavaScript runtime)
- Express JS (Minimal Node.js web application framework, being used to serve the pages)
- Axios (Promise based HTTP client for the browser and node.js)
- Nodemon (Simple monitor script for use during development of a node.js app)
- Docker (OS-level virtualization to deliver software in packages)


# Optional Configuration
# Port
- Per a single run with a custom port, please use the 'Single Startup Command' tool with the custom port:
        > .\runProjPurpleCow_win.PS1 start <custom-port>
    ie:
        > .\runProjPurpleCow_win.PS1 start 8080

- For a permanent change, update the port number on the last line of this document.
- CAUTION - The port # must be the last line of the document, do not delete.
- Web App to be Served on the Following Port:
3000