package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;

@Service
public class UserService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public void addUser(String name, String email, String phone) {
        // business logic for email and phone
        DataSource ds = poolFactory.getDataSource();
      //  ds.getConnection().createStatement().executeQuery("INSERT INTO users (name, email, phone)");
    }

}
