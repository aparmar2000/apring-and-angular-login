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

  credentials = {username: '', password: ''};
  joinUser: UserData

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
  }

  join() {
	this.joinUser = new UserData(this.credentials.username, this.credentials.password);
    this.app.adduser(this.joinUser).subscribe(result => {
            if (result.localeCompare('success')==0) {
				this.router.navigateByUrl('/');
			}
			
            return callback && callback();
        });
  }

}
