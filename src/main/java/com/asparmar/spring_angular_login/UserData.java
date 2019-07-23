package com.asparmar.spring_angular_login;

public class UserData {
	private String username, password;
	
	@Override
	public String toString() {
		return "UserData [username=" + username + ", password=" + password + "]";
	}
	
	//Standard Getters & Setters

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
