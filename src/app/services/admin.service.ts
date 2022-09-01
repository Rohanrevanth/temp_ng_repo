import { Injectable, NgZone, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userData: any;
  authToken: any;

  constructor(
    public ngZone: NgZone,
    public http: HttpClient,
  ) {

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

  postcall(match : any) {
    let url = environment.baseUrl + "api/post/";
    var token = localStorage.getItem("token");
    if(!token)
      token = "";
    let myHeaders;
    myHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": token,
    });
    return this.http.post(url, match, {headers : myHeaders})
  }

}
