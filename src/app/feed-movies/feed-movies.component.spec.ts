import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedMoviesComponent } from './feed-movies.component';

describe('FeedMoviesComponent', () => {
  let component: FeedMoviesComponent;
  let fixture: ComponentFixture<FeedMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
