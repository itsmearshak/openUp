import { Component, ViewEncapsulation } from '@angular/core';
import { HelperService } from '../services/helper/helper.service';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,

})
export class LoginComponent {
username ='';
password='';


  constructor(private helperService: HelperService, private login: LoginService,private route:Router) { }
  catchPhrase: String = this.helperService.getCatchPhrase(Math.floor(Math.random() * 7));
  ngOnInit(): void {

  }
  onButtonClick(): void {
    var isSuccess=this.login.logIn(this.username, this.password);
    if(isSuccess){
      this.route.navigate(['home']);
    }
    else{
      alert("incorrect details");
    }
    
  }

}
