import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from '../geocache-api.service';
import { Cache } from '../cache';
import { Address } from '../address.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ GeocacheApiService ]
})
export class FormComponent {
  cache: Cache;
  address: Address = null;

  constructor(private GeoCache: GeocacheApiService) { }

  goGetAddress(latitude, longitude){
    this.GeoCache.getGeocacheCall(latitude, longitude).subscribe(response => {
      this.cache = new Cache(response.json().results[0].geometry.location.lat,response.json().results[0].geometry.location.lng, response.json().results[0].address_components[1].long_name, response.json().results[0].address_components[2].long_name, response.json().results[0].address_components[4].long_name);
      console.log(response.json());
    });
  }

  goGetGeocache(address, city, state){
    this.GeoCache.getAddressGeoCall(address, city, state).subscribe(response => {
      this.cache = new Cache(response.json().results[0].geometry.location.lat,response.json().results[0].geometry.location.lng, response.json().results[0].address_components[1].long_name, response.json().results[0].address_components[2].long_name, response.json().results[0].address_components[4].long_name);
      console.log(this.cache);
    });
  }
}
