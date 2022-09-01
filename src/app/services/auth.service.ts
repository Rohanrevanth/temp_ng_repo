import { Injectable, NgZone, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError, BehaviorSubject, Subject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    // public ngZone: NgZone,
    public http: HttpClient,
  ) {

  }

  login(body : any) {
    console.log(body)
    let url = environment.baseUrl + "/login";
    let myHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        // "Authorization": token,
      });
    return this.http.post(url, body, {headers : myHeaders})
  }

  getcall() {
    let url = environment.baseUrl + "api/get/";
    var token = localStorage.getItem("token");
    if(!token)
      token = "";
    let myHeaders;
    myHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token,
    });
    return this.http.get(url, {headers : myHeaders})
  }

  postcall(body : any) {
    let url = environment.baseUrl + "api/post/";
    var token = localStorage.getItem("token");
    if(!token)
      token = "";
    let myHeaders;
    myHeaders = new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": token,
      });
    return this.http.post(url, body, {headers : myHeaders})
  }

}
