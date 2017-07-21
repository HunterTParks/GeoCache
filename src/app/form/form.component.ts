import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocacheApiService } from 'geocache-api.service.ts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ GeocacheApiService ] 
})
export class FormComponent implements OnInit {
  Cache: any[] = null;
  constructor(private GeoCache: CeocacheApiService) { }
  goGetGeocache(){
    this.GeoCache.getGeocacheCall().subscribe(response => {
      this.Cache = response.json();
    });
  }
}
