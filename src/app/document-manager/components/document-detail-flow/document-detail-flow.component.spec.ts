import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDetailFlowComponent } from './document-detail-flow.component';

describe('DocumentDetailFlowComponent', () => {
  let component: DocumentDetailFlowComponent;
  let fixture: ComponentFixture<DocumentDetailFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDetailFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDetailFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
