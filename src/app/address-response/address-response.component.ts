import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-response',
  templateUrl: './address-response.component.html',
  styleUrls: ['./address-response.component.css']
})
export class AddressResponseComponent implements OnInit {
  @Input() childCoordinates;

  constructor() {  }

  ngOnInit() {
    
  }

}
