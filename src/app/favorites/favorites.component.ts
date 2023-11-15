import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{

  amount = ['0 - 2', '3 - 5', '6 - 8', '8 or more'];
  signupForm! : FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData' : new FormGroup({
        'yourName' : new FormControl
        (null, [Validators.required]),
          'email' : new FormControl
        (null, [Validators.required, Validators.email]),
        }),
        'amounts' : new FormControl('0 -   2'),
        'questions' : new FormArray([])
    });
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData' : {
        'yourName' : 'Minnie Mouse',
        'email' : 'Magical_Days@sample.com'
      },
        'amount' : '0 - 2',
        'questions' : []
    });
    this.signupForm.patchValue({
      'userData' : {
        'yourName' : 'Mickey Mouse',
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
