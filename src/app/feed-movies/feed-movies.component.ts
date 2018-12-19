import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed-movies',
  templateUrl: './feed-movies.component.html',
  styleUrls: ['./feed-movies.component.css']
})
export class FeedMoviesComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessageMovies();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessageMovies();
  }

}
