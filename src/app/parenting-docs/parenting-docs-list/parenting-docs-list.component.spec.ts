import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingDocsListComponent } from './parenting-docs-list.component';

describe('ParentingDocsListComponent', () => {
  let component: ParentingDocsListComponent;
  let fixture: ComponentFixture<ParentingDocsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingDocsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingDocsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
