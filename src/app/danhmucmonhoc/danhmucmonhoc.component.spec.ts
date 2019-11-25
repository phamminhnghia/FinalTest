import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmucmonhocComponent } from './danhmucmonhoc.component';

describe('DanhmucmonhocComponent', () => {
  let component: DanhmucmonhocComponent;
  let fixture: ComponentFixture<DanhmucmonhocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhmucmonhocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmucmonhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
