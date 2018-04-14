import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  error: string;

  constructor(private _fb: FormBuilder, private _afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.loginForm = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this._afAuth.authState.subscribe((authState: User) => {
      if (authState) {
        this.router.navigate(['/']);
      }
    })
  }

  submit(data) {
    this._afAuth.auth.signInWithEmailAndPassword(data.email, data.password)
      .catch(error => {
        this.error = error.message || 'An error occurred';
      })
  }

}
