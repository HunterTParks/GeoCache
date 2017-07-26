import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocacheApiService {

  constructor(private http: Http) { }

  getGeocacheCall(latitude: string, longitude: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + geoKey);
  }

  getAddressGeoCall(address: string, city: string, state: string){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "," + city + "," + state + "&key=" + geoKey);
  }
}
