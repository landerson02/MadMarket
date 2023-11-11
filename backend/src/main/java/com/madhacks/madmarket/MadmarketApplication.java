package com.madhacks.madmarket;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
public class MadmarketApplication {

	public static void main(String[] args) {
		SpringApplication.run(MadmarketApplication.class, args);
	}

}
