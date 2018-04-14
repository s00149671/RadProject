import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authState: User;

  constructor(private _afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this._afAuth.authState.subscribe((authState: User) => {
      this.authState = authState;
    })
  }

  isLoggedIn() {
    return this.authState;
  }

  logout() {
    this._afAuth.auth.signOut();
  }

  doSearch(search) {
    if (search) {
      this.router.navigate(['home', { search: search }]);
    }
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
