package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Category;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class CategoryService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public JSONArray fetchAllCategories() {
        Connection conn;
        JSONObject json;
        JSONArray arr = new JSONArray();
        try {
            DataSource ds = poolFactory.getDataSource();
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement("select * from categories").executeQuery();

            while (rs.next()) {
                Category c = new Category();
                c.setCategoryId(rs.getInt("category_id"));
                c.setCategoryName(rs.getString("category_name"));
                json = new JSONObject(c);
                arr.put(json);
            }
            conn.close();
            rs.close();
            return arr;

        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

}
