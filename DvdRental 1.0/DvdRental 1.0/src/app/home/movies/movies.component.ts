import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../IMovie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  @Input() movies: IMovie[];

  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;

  constructor() { }

  ngOnInit() {}

  toggleImage():void{
    this.showImage = !this.showImage;
  }

}
