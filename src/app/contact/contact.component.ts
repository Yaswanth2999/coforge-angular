import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  pName:string = '';
  pEmail:string='';
  pMessage:string='';
  submittedData:any = null;

  constructor(private router:Router){}

  onSubmit(){
    this.submittedData ={
      name: this.pName,
      email: this.pEmail,
      message: this.pMessage
    }

    //After 10 seconds navigate to 'details' component along with 'submittedData' object
    setTimeout(()=>{
      this.router.navigate(['/det'],{
        state: {data: this.submittedData},
      });
    },10000); //10 seconds
}
}
