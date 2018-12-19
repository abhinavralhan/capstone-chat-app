import { Injectable } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FileUpload } from './fileupload';
import * as firebase from 'firebase';

@Injectable()
export class UploadFileService {

  private basePath = '/uploads';

    constructor(private db: AngularFireDatabase) { }

    pushFileToStorage(fileUpload: FileUpload, progress: { percentage: number }) {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        () => {
          fileUpload.url = uploadTask.snapshot.downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        }
      );
    }

    private saveFileData(fileUpload: FileUpload) {
      this.db.list(`${this.basePath}/`).push(fileUpload);
      alert('Image uploaded!');
    }


}
