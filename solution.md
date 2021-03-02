## Project Purple Count ##
# Requirements
- pre-installed Docker
-- if on Windows the windows launch script will attempt to install Docker
- pre-installed Chrome browser
- internet connection to reach API

# To Launch Using Single Startup Command
On Windows
1- Execute the 'run_countPurple_windows.ps1' script on the project folder $PATH\Count_Purple_Cows\ via Windows PowerShell:
        > .\run_countPurple_windows.ps1 start
    
    To run app with custom port please refer to the 'Optional Configuration' section.

    NOTE: If windows machine doesn't allow the execution of the script open PowerShell Window as Administrator and run the following command:
        > Set-ExecutionPolicy RemoteSigned

On Linux
1- Please refer to 'run manually' section

# To Build & Run manually
With Docker
- make sure the machine has docker installed
    docker -v
- Download project source
- On $download_path/count_purple directory build and run docker image:
    $ docker build -t count-purple server/
    $ docker run -dp 3000:8080 count-purple
- load localhost:3000 on Chrome, command line:
    $ start chrome 'http://localhost:3000/'

Locally with Yarn
- Start yarn on server/ directory:
    > yarn start
- Open browser and point to: localhost:8080

# To Stop and Delete Docker container/images
Via Provided Script
    > .\run_countPurple_windows.ps1 stop
    > .\run_countPurple_windows.ps1 delete

Manually
- stop app container
    $ docker stop $(docker ps -q --filter ancestor=test-app )   
- delete stopped docker container
    $ docker rm $(docker ps -q -f "ancestor=test-app" -f "status=exited")
- delete docker image
    $ docker rmi test-app

# Optional Configuration
# Port
- Per a single run with a custom port, please use the 'Single Startup Command' tool with the custom port:
        > .\run_countPurple_windows.ps1 start <custom-port>
    ie:
        > .\run_countPurple_windows.ps1 start 8080

- For a permanent change, update the port number on the last line of this document.
- CAUTION - The port # must be the last line of the document, do not delete.
- Web App to be Served on the Following Port:
3000