import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DocumentDetailReleaseComponent} from './document-detail-release.component';

describe('DocumentDetailReleaseComponent', () => {
  let component: DocumentDetailReleaseComponent;
  let fixture: ComponentFixture<DocumentDetailReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentDetailReleaseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDetailReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
