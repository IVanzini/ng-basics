import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-categories',
  templateUrl: './post-categories.component.html',
  styleUrls: ['./post-categories.component.css']
})
export class PostCategoriesComponent implements OnInit {

  constructor(public postService: PostsService) {

  }

  ngOnInit(): void {
    this.postService.getAllCategories();
  }
}
