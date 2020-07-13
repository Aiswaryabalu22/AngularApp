import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from 'src/app/models/Post';
import { ActivatedRoute } from '@angular/router';
//import { Location } from '@angular/common';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post: Post = {
    id: null,
    userid: null,
    title: '',
    body: ''
  };

  constructor(private postservice: PostService,
            //private location: Location,
            private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.postservice.getSpecificPost(id).subscribe( (p) => {
      console.log(p);
      this.post = p;
    })

  }

}
