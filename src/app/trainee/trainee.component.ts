import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [EmployeeComponent,FormsModule,CommonModule],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})
export class TraineeComponent {
  powers = ['Smart Coder', 'Super Flexible',  
  'Logical Thinker', 'Excellent Analyst'];  
  
  //invokes employee class constructor
  
  emp = new Employee(18, '', '', '');

submitted = false;  
onSubmit() { this.submitted = true; }  

}
