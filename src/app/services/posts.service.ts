import { Injectable } from '@angular/core';
import { Blog, Post, PostCategory } from '../models/blog';
import { BLOG } from '../dati/blog';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  blog: Blog = BLOG;
  posts: Post[] = [];
  favorites: Post[] = [];
  categories: PostCategory[] = [];
  selectedCategory: string = "";

  constructor() { }

  getAllPosts() {
    this.posts = this.blog.posts;
    return this.posts;
  }

  getFavorites() {
    return this.favorites;
  }

  svuota() {
    this.favorites = [];
  }

  rimuovi(favId: number) {
    const p = this.favorites.find(x => x.id == favId);
    if (p) {
      const i = this.favorites.indexOf(p);
      this.favorites.splice(i, 1);
    }
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
      this.posts = this.getAllPosts();  
    } else {
      const tmpPosts: Post[] = [];
    //for (let i=0; i<this.posts.length; i++) {
      for (const post of this.getAllPosts()) {
      //if (this.posts[i].category == categoryId) {
        if (post.category == categoryId) {
        tmpPosts.push(post);
        //this.posts.slice(i,1);
        }
      }
      this.posts = tmpPosts;
    }
  }
  
}
