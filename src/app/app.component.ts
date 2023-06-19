import { Component, ViewChild } from '@angular/core';
import { AccountService } from './accounr.service';
import { NgForm } from '@angular/forms';

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

  onAccountAdded(event) {  }

  //forms
  suggestUserName() {
    const suggestedName = 'Superuser';
  }


  // @ViewChild('f') signupForm : NgForm;
  // onSubmit(){
  //   console.log(this.signupForm);
  // }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
