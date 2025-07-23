import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingChatListComponent } from './parenting-chat-list.component';

describe('ParentingChatListComponent', () => {
  let component: ParentingChatListComponent;
  let fixture: ComponentFixture<ParentingChatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingChatListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingChatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
