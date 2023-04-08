import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapasGMapboxComponent } from './mapas-gmapbox.component';

describe('MapasGMapboxComponent', () => {
  let component: MapasGMapboxComponent;
  let fixture: ComponentFixture<MapasGMapboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapasGMapboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapasGMapboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
