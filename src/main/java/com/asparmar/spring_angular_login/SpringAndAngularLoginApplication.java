package com.asparmar.spring_angular_login;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:4200", allowCredentials = "true")
public class SpringAndAngularLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAndAngularLoginApplication.class, args);
	}
	
	/*
	@Bean
    CommandLineRunner init(JdbcUserDetailsManager userManager, PasswordEncoder passEncoder) {
    	return args -> {
    		List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
    		
    		authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
    	
    		userManager.createUser(new User("user", passEncoder.encode("password"), true, true, true, true, authorities));
    		
    		System.out.println("Added default user.");
    	};
    }
    */
}