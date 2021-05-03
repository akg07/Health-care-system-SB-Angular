package com.coforge.hms.common;

/**
 * 
 * @author DELL
 *
 * @param <X> --> DTO
 * @param <Y> --> Model
 */
public class Converter<X,Y> {
	
	/**
	 * Save -> Interaction databse -> SB -> Backend -> <- 
	 * View -> Interaction User -> FrontEnd -> Angualar -> <- 
	 * pat -> register -> doctor -< test -> opertion
	 * fe -> forms -> data-> dtabase
	 * Login -> Admin => unique, CRUD => 
	 * Emp -> Admin
	 * 
	 * step
	 * 1 	Request -> Angular -----------> controller <- url <- reuest (url, body)
	 * 2	Spring -> Process
	 * 3	result -> reposne -> angular -> 200 ok, 500 , 404, 400
	 */
	public void xtyz() {
		
	}

}
