import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Http ,HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AboutComponent } from './about/about.component';

import { HttpService } from './service/http.service';

const appRoutes: Routes = [
    { path: '', component: AboutComponent},
    { path: 'search', component: MainComponent},
    { path: 'login', component: SigninComponent},
    { path: 'registration', component: SignupComponent},
    { path: '**', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SigninComponent,
    SignupComponent,
    AdminDashboardComponent,
    AboutComponent
  ],
  imports: [BrowserModule,RouterModule.forRoot(appRoutes),HttpModule,FormsModule],
  providers: [HttpService, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
