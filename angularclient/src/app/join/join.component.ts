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
  success = false;
  error = '';

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  join() {
	if (this.success) {return;}
	this.error = '';
	if (!this.verify()) {
		this.error = "There are validation errors.  Please fix and resubmit.";
		return;
	}
	this.joinUser = new UserData(this.credentials.username, this.credentials.password);
    this.app.adduser(this.joinUser).subscribe(result => {
            if (result['success']) {
				this.success = true;
				setTimeout(() => {
					this.router.navigate(['/login']);
				}, 5000);
			} else {
				this.success = false;
				this.error = result['error'] + "  Please fix and resubmit.";
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
