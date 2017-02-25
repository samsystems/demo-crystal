import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationItemDetailComponent } from './notification-detail.component';

describe('NotificationItemDetailComponent', () => {
  let component: NotificationItemDetailComponent;
  let fixture: ComponentFixture<NotificationItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
