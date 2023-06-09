import { Component } from '@angular/core';
import { AccountService } from './accounr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    h1 {
      color:dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'my-first-app';

  account: {name: string, status:string}[] = [];
  //empty array
  
  constructor(private accountService: AccountService) {}
  

  ngOnInit() {
    this.account = this.accountService.accounts;
  }

  onAccountAdded(event) {

  }
}
