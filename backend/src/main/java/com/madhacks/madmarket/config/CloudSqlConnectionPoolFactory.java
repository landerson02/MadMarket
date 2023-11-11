package com.madhacks.madmarket.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

@Configuration
public class CloudSqlConnectionPoolFactory {


    private static final String INSTANCE_NAME = "madmarket:us-central1:madmarket";
    private static final String DB_USER = "postgres";
    private static final String DB_PASS = "madhacks";
    private static final String DB_NAME = "madmarketdb";

    @Bean
    public DataSource getDataSource() {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(String.format("jdbc:postgresql:///%s", DB_NAME));
        config.setUsername(DB_USER);
        config.setPassword(DB_PASS);
        config.addDataSourceProperty("socketFactory", "com.google.cloud.sql.postgres.SocketFactory");
        config.addDataSourceProperty("cloudSqlInstance", INSTANCE_NAME);
        return new HikariDataSource(config);
    }

}
