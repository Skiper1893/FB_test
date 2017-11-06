import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './../service/http.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

	username : string
	email 	 : string
	password : string

	@ViewChild('passOne') passOne;

  constructor(private http : HttpService, private router : Router, private fb: FormBuilder) { }

  signUp() {
  	let user = {
  	   username : this.username,
	   email 	: this.email,
	   password : this.password
  	}

  	console.log(user);

  	return this.http.signUp(user).subscribe(data => {
  		if(data.success) {
  			console.log(data);
  		this.router.navigate(['/search']);
  		}
  	}),error => {
  		console.log(`ERROR : ${error}`)
  	}
  };

  ngOnInit() {
  }

}
