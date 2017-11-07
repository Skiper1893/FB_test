import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpService } from './../service/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(private http : HttpService) { }

 Test() {
  	return this.http.testReq().subscribe(data => {
   		let result = data;
   		console.log(result);
  });
 }

  ngOnInit() {
  }



}
