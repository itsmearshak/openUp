import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) {}
  logIn(username:String,password:String){
    const header =new HttpHeaders();
    header.append('Access-Control-Allow-Credentials', 'true')
    header.append('Access-Control-Allow-Origin','http://localhost:8080')
    this.http.post('http://localhost:8080/login',{
      'username':username
    },{headers : header}).subscribe((res)=>{
      console.log(res);
    })
  }
}
