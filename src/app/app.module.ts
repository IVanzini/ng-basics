import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';
import { PiedeComponent } from './piede/piede.component';
import { CalciatorePreviewComponent } from './calciatore-preview/calciatore-preview.component';
import { CalciatoreDetailComponent } from './calciatore-detail/calciatore-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {BsDatepickerModule}  from "ngx-bootstrap/datepicker";
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { FavoritesDetailComponent } from './components/favorites-detail/favorites-detail.component';
import { PostCategoriesComponent } from './components/post-categories/post-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent,
    PiedeComponent,
    CalciatorePreviewComponent,
    CalciatoreDetailComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent,
    TransactionListComponent,
    TransactionDetailComponent,
    PostListComponent,
    PostDetailComponent,
    FavoritesListComponent,
    FavoritesDetailComponent,
    PostCategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
