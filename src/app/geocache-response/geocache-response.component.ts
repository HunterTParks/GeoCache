import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-geocache-response',
  templateUrl: './geocache-response.component.html',
  styleUrls: ['./geocache-response.component.css'],
  providers: []
})
export class GeocacheResponseComponent implements OnInit {
  @Input() childCache;
  constructor() { }

  ngOnInit() {
  }

}
