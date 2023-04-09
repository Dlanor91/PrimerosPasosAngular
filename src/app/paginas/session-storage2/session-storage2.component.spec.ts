import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionStorage2Component } from './session-storage2.component';

describe('SessionStorage2Component', () => {
  let component: SessionStorage2Component;
  let fixture: ComponentFixture<SessionStorage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionStorage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionStorage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
