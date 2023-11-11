package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;

@RestController
@RequestMapping(value = "/test")
public class HelloController {


    @GetMapping()
    public String hello() throws SQLException {
        DataSource ds = CloudSqlConnectionPoolFactory.createConnectionPool();
        ResultSet rs = ds.getConnection().prepareStatement("select * from users").executeQuery();

        while (rs.next()) {
            System.out.println("username: " + rs.getString("username"));
        }
        return "Hi";
    }

}
