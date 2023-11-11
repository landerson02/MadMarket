package com.madhacks.madmarket.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Category;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.lang.reflect.Array;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

@Service
public class CategoryService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public ArrayList<JSONObject> fetchAllCategories() {
        JSONObject json;
        ArrayList<JSONObject> objs = new ArrayList<>();
        try {
            DataSource ds = poolFactory.getDataSource();
            ResultSet rs = ds.getConnection().prepareStatement("select * from categories").executeQuery();

            while (rs.next()) {
                Category c = new Category();
                c.setCategoryId(rs.getInt("category_id"));
                c.setCategoryName(rs.getString("category_name"));
                json = new JSONObject(c);
                objs.add(json);
            }
            return objs;

        } catch (SQLException e) {
            return null;
        }
    }

}
