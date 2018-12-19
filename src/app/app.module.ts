import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule, MatButtonModule } from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap';
import { NgxUploaderModule } from 'ngx-uploader';

import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { FeedComponent } from './feed/feed.component';
import { FeedMoviesComponent } from './feed-movies/feed-movies.component';
import { FeedGamingComponent } from './feed-gaming/feed-gaming.component';
import { FeedCareerComponent } from './feed-career/feed-career.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';

import { ChatService } from './services/chat.service';
import { AuthService } from './services/auth.service';
import { UploadFileService } from './services/upload-file.service';

import { appRoutes } from '../routes';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatroomComponent,
    FeedComponent,
    MessageComponent,
    LoginFormComponent,
    SignupFormComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent,
    FeedMoviesComponent,
    FeedGamingComponent,
    FeedCareerComponent
 ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgxUploaderModule,
    MatProgressBarModule,
    MatButtonModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService, ChatService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
