import { Component } from '@angular/core';
import { AppService } from './service/app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot + Angular Basic Login Application';
  
  constructor(private app: AppService, private http: HttpClient, private router: Router) {
      this.app.authenticate(undefined, undefined);
    }
    logout() {
	  this.http.post('http://localhost:8080/logout', {}).pipe(finalize(() => {
		  this.app.authenticated = false;
		  this.router.navigateByUrl('/login'); 
	  })).subscribe();
    }
	
	authenticated() { return this.app.authenticated; }
}