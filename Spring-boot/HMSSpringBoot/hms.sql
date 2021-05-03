create database HMSSpring2;
use HMSSpring2;

// Run Spring boot Application First Then run below commands

// Fill Out roles table
insert into roles values(1, 'ROLE_USER');
insert into roles values(2, 'ROLE_ADMIN');

//Fill out Users Table
//Password : admin123
insert into users values(1, '$2a$10$nuyV4m3SpBYuqzdRvQK4iO1PI9O0SkLyHQP2YB8CFksVJirzGrDT2', 'admin');
//Password : user123
insert into users values(2, '$2a$10$ef4yjYkFjmAjnQk/GPecK.VxaNmpe6yPfBoZh9dcW1.uzf1zFYemu', 'user');' 

// Provide Roles,  fill out user_roles
insert into user_roles values(2, 1);
insert into user_roles values(1, 2);