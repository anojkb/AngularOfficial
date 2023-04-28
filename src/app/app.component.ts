import { Component, OnInit, Input } from '@angular/core';
// import { Teacher } from '../app/models/teacher';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // teachers = Teacher;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

  products = [
    { name: 'Rice', id: 1, price: 200 },
    { name: 'Beans', id: 2, price: 300 },
    { name: 'Bananna', id: 3, price: 400 },
  ];

 
 principle = 'Principle';
 title = 'Databinding';
 course ='Angular';
  
}
