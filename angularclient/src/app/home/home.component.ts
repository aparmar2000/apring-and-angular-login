import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

	username = '';

  constructor(private app: AppService, private http: HttpClient) {
	this.http.get('http://localhost:8080/user').subscribe(response => {
		console.log(response);
		this.username = response['name'];
	});
  }
  
  authenticated() { return this.app.authenticated; }

}