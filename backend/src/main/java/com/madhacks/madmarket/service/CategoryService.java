package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Category;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class CategoryService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public JSONArray fetchAllCategories() {
        JSONObject json;
        JSONArray arr = new JSONArray();
        try {
            DataSource ds = poolFactory.getDataSource();
            ResultSet rs = ds.getConnection().prepareStatement("select * from categories").executeQuery();

            while (rs.next()) {
                Category c = new Category();
                c.setCategoryId(rs.getInt("category_id"));
                c.setCategoryName(rs.getString("category_name"));
                json = new JSONObject(c);
                arr.put(json);
            }
            rs.close();
            return arr;

        } catch (SQLException e) {
            return null;
        }
    }

}
