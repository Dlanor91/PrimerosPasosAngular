import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBotonesComponent } from './material-botones.component';

describe('MaterialBotonesComponent', () => {
  let component: MaterialBotonesComponent;
  let fixture: ComponentFixture<MaterialBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialBotonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
