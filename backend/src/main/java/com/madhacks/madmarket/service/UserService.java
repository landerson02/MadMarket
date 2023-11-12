package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.User;
import org.json.JSONObject;
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

    public String addUser(String name, String email, String phone) {
        // business logic for email and phone

        if (userExistsCheck(email)) {
            System.err.println("User already exists");
            return null;
        }

        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        try {
            String query = String.format("INSERT INTO users (username, email, phone) VALUES ('%s', '%s', '%s');", name, email, phone);
            System.out.println(query);
            conn = ds.getConnection();
            conn.createStatement().execute(query);
            conn.close();
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
        return "{\"message\": \"User added successfully\"}";
    }

    public JSONObject getUserFromEmail(String email) {
        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        try {
            conn = ds.getConnection();
            System.out.println(email);
            String query = String.format("SELECT * FROM users WHERE email = '%s';", email);
            ResultSet rs = conn.createStatement().executeQuery(query);
            rs.next();
            User user = createUser(rs.getInt("id") ,rs.getString("username"), rs.getString("email"), rs.getString("phone"));
            conn.close();
            return new JSONObject(user);
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    private User createUser(int id, String name, String email, String phone) {
        User user = new User();
        user.setId(id);
        user.setEmail(email);
        user.setName(name);
        user.setPhone(phone);
        return user;
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

    public String updateUser(int id, String name, String email, String phone) {
        DataSource ds = poolFactory.getDataSource();
        Connection conn;
        try {
           conn = ds.getConnection();
           String query = String.format("UPDATE users SET username = '%s', email = '%s', phone = '%s' WHERE id = '%s';", name, email, phone, id);
           conn.createStatement().execute(query);
           return "success";
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    public JSONObject getUserFromId(int id) {
        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        try {
            conn = ds.getConnection();
            System.out.println(id);
            String query = String.format("SELECT * FROM users WHERE id = '%d';", id);
            ResultSet rs = conn.createStatement().executeQuery(query);
            rs.next();
            User user = createUser(rs.getInt("id") ,rs.getString("username"), rs.getString("email"), rs.getString("phone"));
            conn.close();
            return new JSONObject(user);
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }
}
