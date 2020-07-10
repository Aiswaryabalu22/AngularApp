import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  isEdit: boolean = false;
  posts: Post[];
  currentPost: Post = {
    userid: null,
    id: null,
    title:'',
    body: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe( (allPosts) => {
      this.posts = allPosts;
      console.log(this.posts);
    });
  }

  OnNewPost(post: Post){
    this.posts.unshift(post);
    console.log(post)
  }

  editPost(post: Post){
    this.currentPost = post;
    this.isEdit = true;

  }

}
