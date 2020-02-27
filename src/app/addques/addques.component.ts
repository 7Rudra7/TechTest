import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { addQues } from '../Models/addQues';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addques',
  templateUrl: './addques.component.html',
  styleUrls: ['./addques.component.css']
})
export class ADDQuesComponent implements OnInit {

  add:addQues;

  constructor(private fb: FormBuilder, private Router:Router) { }

  ADD :FormGroup;
  ngOnInit() {
  


    this.ADD = this.fb.group({
      Subject_name: new FormControl(),
      Level_Id: new FormControl(),
      Question: new FormControl(),
      op1: new FormControl(),
      op2:new FormControl(),
      op3:new FormControl(),
      op4:new FormControl()
      }
      
      
      );
    }
    onSubmit(){

    }

    SignOut()
  {
    localStorage.clear();
    sessionStorage.clear();

   this.Router.navigate(['/home']);
  }
}
