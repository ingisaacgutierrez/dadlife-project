import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentingChatComponent } from './parenting-chat.component';

describe('ParentingChatComponent', () => {
  let component: ParentingChatComponent;
  let fixture: ComponentFixture<ParentingChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentingChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentingChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
