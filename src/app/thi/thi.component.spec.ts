import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiComponent } from './thi.component';

describe('ThiComponent', () => {
  let component: ThiComponent;
  let fixture: ComponentFixture<ThiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
