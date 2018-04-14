import { RegisterComponent } from './user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule } from 'ngx-toastr';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { MoviesComponent } from './home/movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { ConvertToSpaces } from './shared/convert-to-spaces.pipes';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    MovieComponent,
    StarRatingComponent,
    ConvertToSpaces,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,    
    routes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [MovieService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

