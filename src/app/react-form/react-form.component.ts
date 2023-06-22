import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['krishna' , 'shreya' , 'sathvik'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenName.bind(this)]),
        'email' : new FormControl(null, [Validators.required , Validators.email], this.forbiddenEmail)
      }),
      'gender' : new FormControl('male'),
      'hobbies' : new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // this.signupForm.statusChanges.subscribe(
    //   (status) => console.log(status)
    // );

    // this.signupForm.setValue({
    //   'userData' : {
    //     'username' : 'rishabh',
    //     'email' : 'abc@abc.com'
    //   },
    //   'gender' : 'male',
    //   'hobbies' : []
    // });

    this.signupForm.patchValue({
      'userData' : {
        'email' : 'abc@abc.com'
      }
    });

  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }
  
  // validator
  forbiddenName(control: FormControl) : {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true}
    }
    return null; //if success, you must return NULL and nothing else
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@abc.com') {
          resolve({'emailIsForbidden' : true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
