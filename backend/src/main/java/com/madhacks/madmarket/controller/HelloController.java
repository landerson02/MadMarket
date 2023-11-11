package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/test")
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {


    @GetMapping()
    public Map<String, String> hello() throws SQLException {
        DataSource ds = CloudSqlConnectionPoolFactory.createConnectionPool();
        ResultSet rs = ds.getConnection().prepareStatement("select * from users").executeQuery();

        while (rs.next()) {
            System.out.println("username: " + rs.getString("username"));
        }

        Map<String, String> jsonResponse = new HashMap<>();
        jsonResponse.put("message", "Hello from the server!");

        return jsonResponse;
    }

}
