import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPanelExpansionComponent } from './material-panel-expansion.component';

describe('MaterialPanelExpansionComponent', () => {
  let component: MaterialPanelExpansionComponent;
  let fixture: ComponentFixture<MaterialPanelExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialPanelExpansionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialPanelExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
