# token-authentication-sample
NancyFx with AngularJS token authentication sample

## Getting started

### What?

This project is a working sample of token authentication with asp.net NancyFx REST api (cors enabled) on server and AngularJS as client web app

 - NancyFx with CORS enabled
 - NancyFx using Token authentication
 - AngularJS Token interceptor to sent Authorization header on every outgoing request
 - Login and redirect interceptor - when unauthorized, the user will be redirect to login page, after authenticated, will be redirect to previous route.
 - HTML5 localStorage to keep the user information after a hard refresh

More info on Nancy Token Authencation see https://github.com/NancyFx/Nancy/wiki/Token-Authentication
 
### Client app

```
npm install http-server -g
bower install 
npm start 
```

client app will be available at localhost:8888/src/client/app/#/

### Server app

```
Open visual studio and hit f5 muwhahah ;-)
```

#### Demo credentials

Right username/password combination: username `Luiz`, password `Freneda`
