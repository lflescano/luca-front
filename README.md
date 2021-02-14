# Luca Front

## Dependencies
 - Node
 - NPM

## Instructions
 - Clone repo
 - cd to project folder
 - Install Node y NPM usando NVM. Version 12 en adelante
 - Create .env. Copy .env.example

## SO Windows
 - Edit package.json section "scripts"."start" with:
 `"start": "react-scripts start",`
 - Edit manually `src/environment.js`. Dont use `window._env_.REACT_APP_PRODUCTION`
 - DONT COMMIT CHANGES

## Dev Run
 - npm start
 - Access https://localhost:3000

## Prod Build
 - npm run build

## Docker

### Build
sudo docker build -t luca-front .

### Run
sudo docker run --name luca-front -p 3000:80 luca-front

add "-d" to run in background

### Run with different variables
sudo docker run -p 3000:80 -e REACT_APP_API=https://luca-backend.com.ar luca-front

### Info
https://github.com/kunokdev/cra-runtime-environment-variables
