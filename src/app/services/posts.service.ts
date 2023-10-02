import { Injectable } from '@angular/core';
import { Blog, Post, PostCategory } from '../models/blog';
import { BLOG } from '../dati/blog';
import * as _ from "lodash";
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private baseUrl = "http://localhost:3000/";
  blog: Blog = BLOG;
  posts: Post[] = [];
  favorites: Post[] = [];
  categories: PostCategory[] = [];
  selectedCategory: string = "";

  constructor(private http: HttpClient) { }
  //recupero dai dati fissi
  // getAllPosts() {
  //   this.posts = this.blog.posts;
  //   return this.posts;
  // }

  //recupero con get dal server
  getAllPosts() : Post[] {
    this.http.get<Post[]>(`${this.baseUrl}posts`).subscribe(dati => this.posts = dati);
    return this.posts; 
  }

  getFavorites() {
    return this.favorites;
  }

  svuota() {
    this.favorites = [];
  }

  rimuovi(favId: number) {
    // const p = this.favorites.find(x => x.id == favId);
    // if (p) {
    //   const i = this.favorites.indexOf(p);
    //   this.favorites.splice(i, 1);
    // }
    _.remove(this.favorites, x => x.id == favId);//libreria lodash
  }

  aggiungi(post: Post) {
    const favorite = this.favorites.find(fav => fav.id == post.id);
    if (!favorite) {
      this.favorites.push(post);
    }
  }

  getAllCategories() {
    const category: PostCategory = {
      "id": "all",
      "title": "Tutti"
    };
    this.categories.push(category);
    this.blog.postCategories.forEach(x => this.categories.push(x));
  }

  getPostsByCategory(categoryId: string) {
    console.log(categoryId);
    this.selectedCategory = categoryId;
    if (categoryId == "all") {
      this.getAllPosts();  
    } else {
      const tmpPosts: Post[] = [];
    //for (let i=0; i<this.posts.length; i++) {
      for (const post of this.getAllPosts()) {
      //if (this.posts[i].category != categoryId) {
        if (post.category == categoryId) {
        tmpPosts.push(post);
        //this.posts.slice(i,1);
        }
      }
      this.posts = tmpPosts;
    }
  }
  
}
