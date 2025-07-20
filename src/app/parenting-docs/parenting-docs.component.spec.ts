import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingDocsComponent } from './parenting-docs.component';

describe('ParentingDocsComponent', () => {
  let component: ParentingDocsComponent;
  let fixture: ComponentFixture<ParentingDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
