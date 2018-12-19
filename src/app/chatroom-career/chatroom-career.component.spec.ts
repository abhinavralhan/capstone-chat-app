import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomCareerComponent } from './chatroom-career.component';

describe('ChatroomCareerComponent', () => {
  let component: ChatroomCareerComponent;
  let fixture: ComponentFixture<ChatroomCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
