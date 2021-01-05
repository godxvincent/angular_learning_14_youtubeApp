# YoutubeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## What I learnt.

* Creación de una API KEY para accesar los servicios de YouTube API v3a
* Uso de la documentación de YouTube para obtener información de un canal
* Obtener una lista de reproducción
* Crear una página en la cual pueda cargar los videos de forma paginada
* Usar el Token de respuesta de la api de YouTube
* Trabajar con tipado de datos
* SweetAlert2

## **This project was created by godxvincent.**

![Godxvincent](DFFOO_Vincent_Valentine.png)

## ** Extra installations **
* npm install jquery 
* npm install popper.js --save 
* npm install bootstrap  
* npm install animate.css --save  https://animate.style/ 
* npm install sweetalert2  https://sweetalert2.github.io/#download
* npm install swiper


## ** Links de interés  ** 

* API de youtube 

https://developers.google.com/youtube/v3/docs

* Canal de YouTube Fernando

https://www.youtube.com/channel/UCuaPTYj15JSkETGnEseaFFg

* quicktype
https://quicktype.io/

* swiperjs
https://swiperjs.com/

* ng-starrating
https://www.npmjs.com/package/ng-starrating

How to remove sensitve data

git filter-branch --force --index-filter "git rm --cached --ignore-unmatch src/app/services/movies.service.ts" --prune-empty --tag-name-filter cat -- --all