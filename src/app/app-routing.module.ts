import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component'
import { UsersComponent } from '../app/components/users/users.component'
import { PostsComponent } from '../app/components/posts/posts.component'
import { PostComponent } from '../app/components/post/post.component'
import { NotfoundComponent } from '../app/components/notfound/notfound.component'


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: NotfoundComponent},
  {path: 'notfound', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
