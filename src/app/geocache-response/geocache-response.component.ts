import { Component, Input, OnInit } from '@angular/core';
// import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-geocache-response',
  templateUrl: './geocache-response.component.html',
  styleUrls: ['./geocache-response.component.css'],
  providers: []
})

export class GeocacheResponseComponent {
  @Input() childCache;
  constructor() {

  }

  ngOnInit(){
    console.log(this.childCache);
  }
}
