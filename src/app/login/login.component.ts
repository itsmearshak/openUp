import { Component } from '@angular/core';
import { HelperService } from '../services/helper/helper.service';
import { LoginService } from '../services/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private helperService:HelperService,private login:LoginService) { }
  catchPhrase: String = this.helperService.getCatchPhrase(Math.floor(Math.random() * 7));
  ngOnInit(): void {

  }
onButtonClick():void{
this.login.logIn("arsga",'gggg');
}

}
