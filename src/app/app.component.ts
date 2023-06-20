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
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male' , 'female'];
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };
  submitted = false

  @ViewChild('f') signupForm : NgForm;
  onSubmit(){
    console.log(this.signupForm);

    this.submitted = true;
    this.user.username = this.signupForm.value.groupNew.username;
    this.user.email = this.signupForm.value.groupNew.email;
    this.user.secret = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  
    // this.signupForm.setValue({
    //   groupNew: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      groupNew: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
