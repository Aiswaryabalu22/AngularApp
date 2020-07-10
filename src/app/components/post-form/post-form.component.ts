import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { UrlHandlingStrategy } from '@angular/router';
import { Post } from '../../models/Post'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postservice: PostService) { }

  ngOnInit(): void {
  }

  addPost(title:string, body:string) :void{
    if(!title || !body){
      alert('Please add both title and post to proceed adding..');
    }
    else{
      //POST METHOD
      this.postservice.addPosts({title,body} as Post).subscribe( (resultOfPostAdded) => {
        console.log('Added post: ' + resultOfPostAdded.title)
      });
    }
  }

}
