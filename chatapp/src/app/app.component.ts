import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

	@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';
  
  constructor(private _electronService: ElectronService) {}   // DI
  
  launchWindow() {
    this._electronService.shell.openExternal('https://github.com/abhinavralhan/capstone-chat-app');
  }
}
