import { Component, OnInit, Injectable } from '@angular/core';
import { ChatService } from '../services/chat.service';

import { UploadFileService } from '../services/upload-file.service';
import { FileUpload } from '../services/fileupload';

@Component({
  selector: 'app-chat-form-career',
  templateUrl: './chat-form-career.component.html',
  styleUrls: ['./chat-form-career.component.css']
})

export class ChatFormCareerComponent implements OnInit {

   message: string;

   selectedFiles: FileList;
   currentFileUpload: FileUpload;
   progress: { percentage: number } = { percentage: 0 };

  constructor(private chat: ChatService, private uploadService: UploadFileService) {  }

  ngOnInit() {
  }

  send() {
    this.chat.sendMessageCareer(this.message);
    this.message = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.send();
    }
  }

  onFileComplete(data: any) {
    console.log(data)
  }

  selectFile(event) {
      const file = event.target.files.item(0);

      if (file.type.match('image.*')) {
        this.selectedFiles = event.target.files;
      } else {
        alert('invalid format!');
      }
    }

    upload() {
      const file = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      this.currentFileUpload = new FileUpload(file);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    }


}
