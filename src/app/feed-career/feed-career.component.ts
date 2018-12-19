import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../models/chat-message.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-feed-career',
  templateUrl: './feed-career.component.html',
  styleUrls: ['./feed-career.component.css']
})
export class FeedCareerComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.feed = this.chat.getMessageCareer();
  }

  ngOnChanges() {
    this.feed = this.chat.getMessageCareer();
  }

}
