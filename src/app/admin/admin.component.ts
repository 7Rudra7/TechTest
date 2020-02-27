import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Admin_Details } from '../Models/Admin_Details';
import { QuizService } from '../shared/quiz.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private quizService: QuizService,private route : Router) { }


  AdminLogForm :FormGroup;
  ngOnInit() {
    this.AdminLogForm = new FormGroup({
    Admin_Name: new FormControl(),
      Admin_Email: new FormControl("",Validators.email),
      Admin_password: new FormControl(),

    });
  }

  OnSubmit(obj4:Admin_Details)
  {

    alert(obj4.Admin_Email)
    this.quizService.getadminLogdetails(obj4).subscribe(
      (data:any) =>{
        localStorage.clear();
        // localStorage.setItem('admin',JSON.stringify(data));

      
        // sessionStorage.setItem("sess_emailID",obj4.Admin_Email);


        if(data==true)
        {
          alert("Logged in sucessfully");
          localStorage.clear();
        localStorage.setItem('admin',JSON.stringify(data));
          this.route.navigate(['/adminOption']);
        }

       else
       {
         alert("Invalid User")
         this.route.navigate(['/login']);
       }
      }
      );
    }
}
