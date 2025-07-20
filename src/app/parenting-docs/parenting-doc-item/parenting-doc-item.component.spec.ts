import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingDocItemComponent } from './parenting-doc-item.component';

describe('ParentingDocItemComponent', () => {
  let component: ParentingDocItemComponent;
  let fixture: ComponentFixture<ParentingDocItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingDocItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingDocItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
