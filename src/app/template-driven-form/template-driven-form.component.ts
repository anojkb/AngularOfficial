// // import {
// //   Component,
// //   OnInit,
// //   OnDestroy
// // } from '@angular/core';
// // import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-template-driven-form',
//   templateUrl: './template-driven-form.component.html',
//   styleUrls: ['./template-driven-form.component.css']
// })
// export class TemplateDrivenFormComponent implements OnInit,OnDestroy {
//   constructor(){}
//   // ngOnDestroy(): void {
//   //   throw new Error('Method not implemented.');
//   // }
//   ngOnInit(): void {
    
//   }
//   // @ViewChild('f') courseForm: NgForm;

//   // onSubmit(form: NgForm){
//   //   console.log("Course Name is : " + form.value.courseName);
// 	// console.log("Course Desc is : " + form.value.courseDesc);
// 	// console.log("Course Amount is : " + form.value.courseAmount); 
//   // }

//   // onClear(){
//   //   this.courseForm.reset
//   // }
//   // onDelete() {
//   // }

//   // ngOnDestroy() {    
//   // }
// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { Hero } from '../models/hero';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  // submitted = false;

  // onSubmit() { this.submitted = true; }
  // get diagnostic() { return JSON.stringify(this.model); }  
//   name: string = "";  
//   city: string = "";  
//   state: string = "";  
//   address: string = "";  
//   zip: string = "";  
//   email: string = "";  
//   password: string = "";  
//   isMarried: boolean; 

  
//   onSubmit(DemoForm) {  
//     //local variable  
//    console.log("Name :- " + this.name);  
//    console.log("City :- " + this.city);  
//    console.log("State :- " + this.state);  
//    console.log("Zip :- " + this.zip);  
//    console.log("Email :- " + this.email);  
//    console.log("Password :- " + this.password);  
//    console.log("IsMarried :- " + this.isMarried);  
 
 
//  }
constructor() { }
ngOnInit(): void {
 }
 handleFormSubmit(form: NgForm): void {
// value will print the JavaScript Object of the Form Values.
console.log(form.value);
 }

 }


