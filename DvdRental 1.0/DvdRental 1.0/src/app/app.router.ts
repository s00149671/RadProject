//Design Course
//www.coursetro.com 
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MovieComponent } from './movie/movie.component';

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    {
        path: 'register', component: UserComponent,
        children: [{path: '', component: RegisterComponent}]
    },
    {
        path: 'login', component: UserComponent,
        children: [{path: '', component: SignInComponent}]
    },
    { path: 'movies/:id', component: MovieComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
