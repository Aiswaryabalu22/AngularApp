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
    title: '',
    body: ''
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((allPosts) => {
      this.posts = allPosts;
      console.log(this.posts);
    });
  }

  OnNewPost(post: Post) {
    this.posts.unshift(post);
    console.log(post)
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  OnPostUpdated(post: Post) {
    this.isEdit = false;
    this.currentPost = {
      userid: null,
      id: null,
      title: '',
      body: ''
    }
  }

  removePost(postToBeDeleted: Post){
    if(confirm('Are you sure?')){
      this.postService.deletePost(postToBeDeleted.id).subscribe( () => {
        console.log('Simply an implementation pf DELETE. Can\'t actually delete');
        this.posts.forEach( (cur, index) => {
          if(cur.id === postToBeDeleted.id){
            this.posts.splice(index, 1);
          }

        })
      })
    }

  }

}
