import { Component, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html',
  styleUrls: ['./http-form.component.css']
})
export class HttpFormComponent implements OnDestroy{
  @ViewChild('postForm') myForm: NgForm;
  
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.errorS.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, errors => {
      this.error = errors.message;
      console.log(errors);
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title , postData.content);
    this.myForm.reset();
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, errors => {
      this.error = errors.message;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
