package com.madhacks.madmarket.config;

import com.madhacks.madmarket.service.CategoryService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ServiceConfig {

    @Bean
    public CategoryService getCategoryService() {
        return new CategoryService();
    }

}
