import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocacheApiService {

  constructor(private http: Http) { }

  getGeocacheCall(latitude: string, longitude: string){
    console.log(latitude);
    console.log(longitude);
    console.log("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + geoKey);
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=" + geoKey);
  }
}
