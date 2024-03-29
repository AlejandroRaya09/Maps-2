import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamFuZHJvcmF5YSIsImEiOiJjbGRqaXZhZzQwMHVrM25sN2w1b2RyYXJkIn0.sBAACzhFGZGJWGjtuvO2zw';

if(!navigator.geolocation){
  alert('Navegador no soporta la Geolocalizacion')
  throw new Error('Navegador no soporta la Geolocalizacion')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
