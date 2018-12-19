import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedGamingComponent } from './feed-gaming.component';

describe('FeedGamingComponent', () => {
  let component: FeedGamingComponent;
  let fixture: ComponentFixture<FeedGamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedGamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
