import {Routes} from '@angular/router';
import { LoginFormComponent } from './app/login-form/login-form.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { ChatroomCareerComponent } from './app/chatroom-career/chatroom-career.component';
import { FeedMoviesComponent } from './app/feed-movies/feed-movies.component';
import { FeedCareerComponent } from './app/feed-career/feed-career.component';
import { FeedGamingComponent } from './app/feed-gaming/feed-gaming.component';


export const appRoutes :Routes=[
    {path:'signup',component:SignupFormComponent},
    {path:'login',component:LoginFormComponent},
    {path:'chat',component:ChatroomComponent},
    {path:'chat-career', component:ChatroomCareerComponent},
    {path:'chat-movies', component:FeedMoviesComponent},
    {path:'chat-gaming', component:FeedGamingComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'}
];
