import { Component, OnInit } from '@angular/core';
import { HttpService } from './../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})

export class SigninComponent implements OnInit {

	email	 : string;
	password : string;

  constructor( private auth : HttpService,  private router: Router) { }



  ngOnInit() {
  }

  public signIn() {
  	let user = {
	   email 	: this.email,
	   password : this.password
  	};

  console.log(user);
  
   return this.auth.signIn(user).subscribe(data => {
   		if(data.success) {
   			console.log(data);
  		this.router.navigate(['/search']);
  		}
  	}),error => {
  		this.router.navigate(['/login']);
  	}
  }
}
