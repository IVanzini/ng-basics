import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/blog';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-favorites-detail',
  templateUrl: './favorites-detail.component.html',
  styleUrls: ['./favorites-detail.component.css']
})
export class FavoritesDetailComponent {
  @Input()
  favorite?: Post;

  constructor(public postService: PostsService) {

  }
}
