import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeocacheApiService {

  constructor(private http: Http) { }
  
  getGeocacheCall(){
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyD35VsSUMFcOucK8aWfNeYQ91bxreDAHGY");
  }
}
