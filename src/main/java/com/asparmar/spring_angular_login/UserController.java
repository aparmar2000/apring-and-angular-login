package com.asparmar.spring_angular_login;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class UserController {
	@Autowired
	private H2Dao dao;
     
    @RequestMapping("/user")
	public Principal user(Principal user) {
    	return user;
	}
    
    @PostMapping("/join")
    void addUser(@RequestBody UserData newUser, JdbcUserDetailsManager userManager, PasswordEncoder passEncoder) {
    	System.out.println("Adding user:\n\t"+newUser.getUsername()+" : "+newUser.getPassword());
    	
    	List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    	
    	userManager.createUser(new User(newUser.getUsername(), passEncoder.encode(newUser.getPassword()), true, true, true, true, authorities));
    }
}