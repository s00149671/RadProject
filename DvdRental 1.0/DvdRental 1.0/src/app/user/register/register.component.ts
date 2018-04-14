import { UserService } from '../../user.service';
import { User } from '../../user.model';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user : User;

  constructor(private userService: UserService,private router: Router,private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
    
    }
    resetForm(form? : NgForm){
      if(form != null)
      form.reset();
      this.user = {
        UserName: '',
        Password: '',
        Email:'',
        FirstName:'',
        LastName:''
      }
    }

    OnSubmit(form : NgForm){
      this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true)
        {
        this.resetForm(form);
        this.toastr.success('User Registration Successful')
        }
        else 
        this.toastr.error(data.Errors[0]);
      });
    }
  }
