import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';

import { DataService } from './services/data.service'
import { PostService } from './services/post.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotfoundComponent } from './components/notfound/notfound.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    PostService,
    HttpClientModule,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
