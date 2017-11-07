import { Component, OnInit } from '@angular/core';
import { HttpService } from './../service/http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	interest : string

  constructor(private http : HttpService) { }

Search() {
	console.log(this.interest);
  	return this.http.search(this.interest).subscribe(data => {
   		let result = data;

   		console.log(data);

  });
 }

  ngOnInit() {}

}
