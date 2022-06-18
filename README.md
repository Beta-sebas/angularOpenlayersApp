# AngularOpenlayersApp

Aplicación web creada con _Angular_ y _OpenLayers_, que ha sido construida completamente de forma modular utilizando LazyLoad, en ella se implementa un Módulo específico para integrar OpenLayers de manera fácil a proyectos de Angular utilizando componentes.
 
Características de la aplicación

* _Desarrollo Modular_
* _Lazy Load_
* _OpenLayers Markers_
* _OpenLayers Popup_

![1](https://user-images.githubusercontent.com/80282099/170772571-34294ac7-b0cc-4054-946b-bba835ca2587.png)
![2](https://user-images.githubusercontent.com/80282099/170772591-8b4edce4-7099-4adb-92e2-a5b42d32d50f.png)

## Cambios
###_v1.0_

_Nuevo componente ol-map-search_
```
Permite realizar la busqueda de marcadores desde un backend, a su vez permite eliminarlos y visualizarlos con una animación.

## Componentes 



## Instalación ⚙️

Install dependencies:

En la carpeta del proyecto, ejecuta.

* _npm i ol_
* _npm i --save-dev @types/ol_

## Usar como un módulo en proyectos existentes

Mueva la carpeta open-layers a la carpeta de su proyecto Angular. Import OpenLayersModule en el módulo de su aplicación que lo utilizará :

import { OpenLayersModule } from './open-layers/open-layers.module';

Finalmente, en su index.html import OL css:

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.14.1/css/ol.css" type="text/css">

## Comenzando 🚀

Ejecuta `ng serve -o` en la ventana de comando para ejecutar el sevidor de desarrollo. En el navegador se abrirá `http://localhost:4200/` una vez termine la compilación. La aplicación se actualizará automaticamente en el servidor si realizas cambios en los archivos.

## Construido con 🛠️

* [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.
* [NodeJs](https://nodejs.org/es/) vesion 16.14
* [OpenLayers](https://github.com/openlayers/openlayers) vesion 6.14.1

## Build

Ejecuta `ng build` para desplegar la app. Que se guardará en el directorio `dist/`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App Deploy 💻
[OpenlayersApp v1.0](https://adminspring-openlayers-markers.herokuapp.com/openlayer/markers)
[OpenlayersApp v0.1.0](https://beta-sebas.github.io/angularOpenlayersApp/)

## Autor ✒️
* **Juan Sebastian Betancourt**  - [Beta-sebas](https://github.com/Beta-sebas)
