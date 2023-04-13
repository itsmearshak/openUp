import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  logIn(username: String, password: String): boolean {
    if (username === "Arshak" && password === "124563") {
      return true;
    }
    return false;
  }
}
