import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingChatItemComponent } from './parenting-chat-item.component';

describe('ParentingChatItemComponent', () => {
  let component: ParentingChatItemComponent;
  let fixture: ComponentFixture<ParentingChatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingChatItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingChatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
