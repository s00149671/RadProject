import { NgForm } from '@angular/forms/src/directives';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { IMovie } from '../IMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: IMovie;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private _movieService: MovieService,private toastr : ToastrService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this._movieService.getMovieById(id)
        .subscribe((movie: IMovie) => {
          this.movie = movie;
        })
    })
  }
  OnClick(form : NgForm){
    this.toastr.show('Subscription Added')
  }
}
