import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCareerComponent } from './feed-career.component';

describe('FeedCareerComponent', () => {
  let component: FeedCareerComponent;
  let fixture: ComponentFixture<FeedCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
