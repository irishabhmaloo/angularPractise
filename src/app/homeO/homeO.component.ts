import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from'rxjs';
import { timeout } from 'rxjs-compat/operator/timeout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './homeO.component.html',
  styleUrls: ['./homeO.component.css']
})
export class HomeOComponent implements OnInit {

  // storing all our observables.
  private firstObsSubscriptions: Subscription;
  
  constructor() { }

  ngOnInit() {
    // observable
    // this.firstObsSubscriptions = interval(period: 10000).subscribe(next: count => {
    //   console.log(count);
    // });

    // CUSTOM OBSERVABLE
    // const customIntervalObservable = Observable.create(observer => {
    //   let count=0;
    //   setInterval( handler: () => {
    //     observer.next(count);
    //     count++;
    //     if(count === 2) {
    //       observer.complete();
    //     }

    //     if(count > 3) {
    //       observer.error(new Error(message: ' ERRPR ENCOUNTERED!'));
    //     }
    //   }, timeout: 1000);
    // });

    // this.firstObsSubscriptions = customIntervalObservable.pipe(map(project: (data :number) => {
    //   return 'Round ' + (data + 1);
    // })).subscribe(data => {
    //   console.log(data);
    // }, error => {
    //   console.log(error);
    // }, () => {
    //   console.log("completed");
    // });
  }

  // ngOnDestroy(): void {
  //   this.firstObsSubscriptions.unsubscribe();
  // }

}
