import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasGoogleComponent } from './mapas-google.component';

describe('MapasGoogleComponent', () => {
  let component: MapasGoogleComponent;
  let fixture: ComponentFixture<MapasGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapasGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
