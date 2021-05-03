package com.coforge.hms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableJpaRepositories
@SpringBootApplication
public class HmsSpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(HmsSpringBootApplication.class, args);
	}

//	@Bean
//	public WebMvcConfigurer configurer() {
//		return new WebMvcConfigurer() {
//
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/hms/*").allowedOrigins("http://localhost:4200");
//			}
//			
//			
//		};
//	}
}
