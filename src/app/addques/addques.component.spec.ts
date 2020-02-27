import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDQuesComponent } from './addques.component';

describe('ADDQuesComponent', () => {
  let component: ADDQuesComponent;
  let fixture: ComponentFixture<ADDQuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDQuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
