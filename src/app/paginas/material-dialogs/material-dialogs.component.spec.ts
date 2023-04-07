import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDialogsComponent } from './material-dialogs.component';

describe('MaterialDialogsComponent', () => {
  let component: MaterialDialogsComponent;
  let fixture: ComponentFixture<MaterialDialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDialogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
