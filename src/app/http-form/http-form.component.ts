import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-http-form',
  templateUrl: './http-form.component.html',
  styleUrls: ['./http-form.component.css']
})
export class HttpFormComponent {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post('https://learnangular-86b7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', 
    postData).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
    .get<{[key: string] : Post}>('https://learnangular-86b7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for(const key in responseData) {
        if(responseData.hasOwnProperty(key)) 
        //so that you are not trying to access the properties of some prototype
        {
          postsArray.push({...responseData[key], id:key});
        }
      } 
      return postsArray; //for subscribe
    }))
    .subscribe(posts => {
      this.loadedPosts = posts;
    });
  }
}
