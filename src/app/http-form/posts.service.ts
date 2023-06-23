import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
    errorS = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePost(title: string, content: string ) {
        // Send Http request
        const postData: Post = {title: title, content: content}

        console.log(postData);
        this.http.post(
            'https://learnangular-86b7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', 
            postData,
            {
                observe:'response'
            }
        )
        .subscribe(responseData => {
            console.log(responseData);
        }, error => {
            this.errorS.next(error.message);
        });
    }

    fetchPosts() {
        return this.http
            .get<{[key: string] : Post}>(
                'https://learnangular-86b7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
                {
                    headers: new HttpHeaders({
                        'custom-header': 'hello',
                        'video' : 'no'
                    }),
                    params: new HttpParams().set('print', 'pretty') // (key, value)
                }
            )
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
            }));
    }

    deletePosts() {
        return this.http.delete(
            'https://learnangular-86b7b-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
            {
                responseType: 'text'
                // responseType: 'blob'
                // responseType: 'json'
            }
        )
    }
}