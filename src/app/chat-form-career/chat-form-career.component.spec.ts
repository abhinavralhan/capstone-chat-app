import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormCareerComponent } from './chat-form-career.component';

describe('ChatFormCareerComponent', () => {
  let component: ChatFormCareerComponent;
  let fixture: ComponentFixture<ChatFormCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFormCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFormCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
