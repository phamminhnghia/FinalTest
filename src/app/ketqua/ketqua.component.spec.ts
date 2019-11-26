import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KetquaComponent } from './ketqua.component';

describe('KetquaComponent', () => {
  let component: KetquaComponent;
  let fixture: ComponentFixture<KetquaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KetquaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KetquaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
