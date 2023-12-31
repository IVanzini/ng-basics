import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/blog';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input()
  post?: Post;

  constructor(public postService: PostsService) {

  }

}
