import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingChatEditComponent } from './parenting-chat-edit.component';

describe('ParentingChatEditComponent', () => {
  let component: ParentingChatEditComponent;
  let fixture: ComponentFixture<ParentingChatEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingChatEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingChatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
