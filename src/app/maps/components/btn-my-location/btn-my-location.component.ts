import { Component } from '@angular/core';
import { MapService,PlacesService} from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent {
  constructor(private mapService: MapService,private placesService: PlacesService ) {}

  goToMyLocation() {

    if(!this.placesService.isUserLocationReady) throw Error('No hay ubicacion de usuario');
    if(!this.mapService.isMapReady) throw Error('No se a inicializado el mapa');


    this.mapService.flyTo(this.placesService.useLocation!);
  }
}
