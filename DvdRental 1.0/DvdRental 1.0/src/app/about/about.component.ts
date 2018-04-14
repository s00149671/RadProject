import { UserService } from '../user.service';
import { IMovie } from '../IMovie';
import { Component, OnInit,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
userClaims : any;

  constructor(private router : Router,private userService : UserService,private _movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data:any)=> {
      this.userClaims = data;
    })
  }
}
