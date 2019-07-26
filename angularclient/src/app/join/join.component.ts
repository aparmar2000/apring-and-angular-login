import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from '../model/userdata';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  credentials = {username: '', password: '', passwordVerify: ''};
  joinUser: UserData
  joinError = false;
  error = '';

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  join() {
	this.error = '';
	if (!this.verify()) {
		this.error = "There are validation errors.  Please fix and resubmit.";
		return;
	}
	this.joinUser = new UserData(this.credentials.username, this.credentials.password);
    this.app.adduser(this.joinUser).subscribe(result => {
            if (result['success']) {
				this.joinError = false;
				this.router.navigateByUrl('/');
			} else {
				this.joinError = true;
				this.error = result['error'];
				console.log(this.error);
			}
			
			return;
        });
  }
  
  verify() {
	var valid = true;
	
	if (this.credentials.username == '') {valid = false;}
	if (this.credentials.password == '') {valid = false;}
	if (this.credentials.password != this.credentials.passwordVerify) {valid = false;}
	
	return valid;
  }
}
