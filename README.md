# Health Care System

- Used Spring-boot for server handling, All API written in spring boot.
- Used Spring security and JWT authentication for security and Login purpose.
- Annotation applied only in spring-boo, NO XML code

- In Angular we developed Frontend pages i.e. Login, Home, Differnet functionalites
- User and Admin, Two type of roles are present.
- User is like an employee in organization, and Admin is Administrator.
- Search functionality are given by the use of Pipe


#### Angular-Client should be on http://localhost:4200
#### Spring-boot-server should run on http://localhost:8080


### MYSQL
- Data Will be store in Mysql-Database
- Database name is **HMSSpring2**
- Give your username and password in application.properties file in spring boot
- Make sure your mysql is running on 3306 else you have to change the port in application.properties file in spring boot

### Mandatory Commands you have to run

- Open your Mysql-workbench or Mysql 8.0 Command line client
- if Database exists **Use HMSSpring2;** else create database and run Spring-boot server application and then come to this point
- Insert Some Data in roles table

Commands -->

insert into roles values(1, 'ROLE_USER');
insert into roles values(2, 'ROLE_ADMIN');

insert into users values(1, '$2a$10$nuyV4m3SpBYuqzdRvQK4iO1PI9O0SkLyHQP2YB8CFksVJirzGrDT2', 'admin'); **Password : admin123**
insert into users values(2, '$2a$10$ef4yjYkFjmAjnQk/GPecK.VxaNmpe6yPfBoZh9dcW1.uzf1zFYemu', 'user');' **Password : user123**
<br>
**This is Encrypted Password**

insert into user_roles values(2, 1);
insert into user_roles values(1, 2);

**There is no signup option in Angular-clinet when it is runnin on chrome but you can go to signup page by writting this URL**
http://localhost:4200/signup
it will create only **User role** profile for you

### Access
Admin has all accesses <br>
User has all access except Specialization, Department, Employee pages If you try using url then it will show **you are not authorised**
