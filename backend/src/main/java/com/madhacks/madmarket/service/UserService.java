package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class UserService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public void addUser(String name, String email, String phone) {
        // business logic for email and phone

        if (userExistsCheck(email)) {
            System.err.println("User already exists");
            return;
        }

        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        try {
            String query = String.format("INSERT INTO users (username, email, phone) VALUES ('%s', '%s', '%s');", name, email, phone);
            System.out.println(query);
            conn = ds.getConnection();
            conn.createStatement().executeQuery(query);
            conn.close();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    private boolean userExistsCheck(String email) {
        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        try {
            conn = ds.getConnection();
            String query = String.format("SELECT * FROM users WHERE email = '%s';", email);
            System.out.println(query);
            ResultSet rs = conn.createStatement().executeQuery(query);
            boolean exists = rs.next();
            conn.close();
            return exists;
        } catch (SQLException e) {
            System.out.println(e);
            return false;
        }
    }

}
