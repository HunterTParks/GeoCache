import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocacheResponseComponent } from './geocache-response.component';

describe('GeocacheResponseComponent', () => {
  let component: GeocacheResponseComponent;
  let fixture: ComponentFixture<GeocacheResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeocacheResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocacheResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
