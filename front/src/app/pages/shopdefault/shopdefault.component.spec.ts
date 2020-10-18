import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdefaultComponent } from './shopdefault.component';

describe('ShopdefaultComponent', () => {
  let component: ShopdefaultComponent;
  let fixture: ComponentFixture<ShopdefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
