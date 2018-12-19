import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed-gaming',
  templateUrl: './feed-gaming.component.html',
  styleUrls: ['./feed-gaming.component.css']
})
export class FeedGamingComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessageGaming();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessageGaming();
  }

}
