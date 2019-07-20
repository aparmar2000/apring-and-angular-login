package com.asparmar.spring_angular_login;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class UserController {
     
    @RequestMapping("/user")
	public Principal user(Principal user) {
    	return user;
	}
}