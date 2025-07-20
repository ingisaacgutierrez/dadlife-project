import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingDocEditComponent } from './parenting-doc-edit.component';

describe('ParentingDocEditComponent', () => {
  let component: ParentingDocEditComponent;
  let fixture: ComponentFixture<ParentingDocEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingDocEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingDocEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
