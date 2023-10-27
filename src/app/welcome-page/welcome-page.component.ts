import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomeComponent implements OnInit {
  kid = ['yes', 'no'];
  amount = ['0 - 2', '3 - 5', '6 - 8', '8 or more'];
  signupForm! : FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl
        (null, [Validators.required]),
          'email' : new FormControl
        (null, [Validators.required, Validators.email]),
        }),
        'kids' : new FormControl('yes'),
        'amounts' : new FormControl('0 -   2'),
        'questions' : new FormArray([])
    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData' : {
        'username' : 'Minnie Mouse',
        'email' : 'Magical_Days@sample.com'
      },
        'kid' : 'yes',
        'amount' : '0 - 2',
        'questions' : []
    });
    this.signupForm.patchValue({
      'userData' : {
        'username' : 'Mickey Mouse',
      },
    });
  }
  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddQuestion(){
    const control = new FormControl
    (null, Validators.required);
    (<FormArray>this.signupForm.get('questions')).push(control);
  }
  getControls(){
    return (<FormArray>this.signupForm.get('questions')).controls;
  }
}
