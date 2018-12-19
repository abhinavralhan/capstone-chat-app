import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, Input } from '@angular/core';
import { FileUpload } from '../services/fileupload';
import { UploadFileService } from '../services/upload-file.service';

@Component({
  selector: 'app-chatroom-career',
  templateUrl: './chatroom-career.component.html',
  styleUrls: ['./chatroom-career.component.css']
})
export class ChatroomCareerComponent implements OnInit, AfterViewChecked {

  @ViewChild('scroller') private feedContainer: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom(): void {
    this.feedContainer.nativeElement.scrollTop
    = this.feedContainer.nativeElement.scrollHeight;
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

}
