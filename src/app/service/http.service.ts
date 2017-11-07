import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class HttpService {

  constructor(private http: Http, router: Router) { }

  getArticles(interest) : Observable<any> {
  	const ep = this.prepEndpoint('uris.SEARCH')
  	return this.http.get(ep, interest)
  	.map((res:Response) => res.json())
  	.catch((error:any) => { return Observable.throw(error);
  	})
  }

  signIn(data) : Observable<any> {
  	const ep = this.prepEndpoint('signin')
  	return this.http.post(ep, data)
  	.map((res:Response) => res.json())
  	.catch((error:any) => { return Observable.throw(error);
  	})
  }

  signUp(data) : Observable<any> {
  	const ep = this.prepEndpoint('signup')
  	return this.http.post(ep, data)
  	.map((res:Response) => res.json())
  	.catch((error:any) => { return Observable.throw(error);
  	})
  }

   signOut() : Observable<any> {
  	const ep = this.prepEndpoint('signin')
  	return this.http.get(ep)
  	.map((res:Response) => res.json())
  	.catch((error:any) => { return Observable.throw(error);
  	})
  }

  testReq() : Observable<any> {
    const ep = this.prepEndpoint('help')
    return this.http.get(ep)
    .map((res:Response) => res.json())
    .catch((error:any) => { return Observable.throw(error);
    })
   }

  prepEndpoint(ep) {
    return 'http://localhost:3000/' + ep;
  }

}
