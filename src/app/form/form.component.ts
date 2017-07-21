import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from '../geocache-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ GeocacheApiService ]
})
export class FormComponent {
  Cache: any = null;
  constructor(private GeoCache: GeocacheApiService) { }

  goGetGeocache(){
    this.GeoCache.getGeocacheCall().subscribe(response => {
      this.Cache = response.json();
      console.log(this.Cache.results);
    });
    // console.log("TESTING");
  }
}
