import { IMovie } from '../IMovie';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  movieIds = ['tt2488496', 'tt1201607', 'tt0120737', 'tt0109830', 'tt2015381'];
  movies: IMovie[];
  search: string;
  searchMovies: IMovie[];
  subscription: Subscription;

  constructor(private _movieService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this._movieService.testMethod();
    this._movieService.getMovies(this.movieIds).subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });

    this.subscription = this.route.params.subscribe(params => {
      this.search = params['search'];
      if (this.search) {
        this._movieService.getMoviesBySearch(this.search)
          .subscribe((movies: IMovie[]) => {
            this.searchMovies = movies;
          })
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
