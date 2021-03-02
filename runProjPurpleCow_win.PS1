$arg=$args[0]
$port=$args[1]

if ($arg -eq 'stop') {
    docker stop $(docker ps -q --filter ancestor=purple-count )   
    exit
} elseif ($arg -eq 'delete') {
    # delete stopped docker container
    docker rm $(docker ps -q -f "ancestor=purple-count" -f "status=exited")
    # delete docker image
    docker rmi purple-count
    exit
} elseif ($arg -ne 'start') { # only the 'start' command would clear this condition and execute the rest of the script
    Write-Host "Please use one of the following arguments; 'start', 'stop', 'delete'."
    exit
}

Write-Host "This script will install Docker on your machine (if not found) and download an image to be run as a docker container"

# Tries to check for docker installation
try {
    docker -v
} catch {
    write-host "Missing Docker; Downloading...."
    $url = "https://desktop.docker.com/win/stable/Docker%20Desktop%20Installer.exe"
    $output = 'docker_desktop_installer.exe'
    (New-Object System.Net.WebClient).DownloadFile($url, $PSScriptRoot+'\'+$output)
    

    # Install
    write-host "Installing...."
    start-process -wait docker_desktop_installer.exe " install"

    # Clean-up
    ###rm docker_desktop_installer.exe
    docker -v
}

# Run
###start-process "$env:ProgramFiles\docker\Docker\Docker Desktop.exe"

## DOCKER
# Build Image
docker build -t purple-count server/

# get Port to serve web app
if(!$port) {
    $port = (Get-Content solution.md -Last 1)
}

write-host "Docker container will be listening on port $($port)"

# Run Image
$dockerRunCommand = "{0}{1}{2}" -f "docker run -dp ", $port, ":8080 purple-count"
write-host $dockerRunCommand
Invoke-Expression $dockerRunCommand
Start-Sleep -s 1

# Open Chrome Browser @ localhost:$port.  NOTE:  $port is taken programatically as the last line of 'solution.md'
Start-Process chrome "http://localhost:$($port)/"