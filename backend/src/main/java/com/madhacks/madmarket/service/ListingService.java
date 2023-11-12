package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Listing;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Random;

@Service
public class ListingService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public void addListingTest(long categoryId) {
        DataSource ds = poolFactory.getDataSource();
        Random rand = new Random();
        Connection conn;
        StringBuilder builder = new StringBuilder();
        builder.append("INSERT INTO listings (listing_id, buyer_id, lister_id, category_id, name, description, price, timestamp) VALUES ( ");
        builder.append("'").append(rand.nextInt(1, 999999999)).append("', ");
        builder.append("'").append(rand.nextInt(1, 10)).append("', ");
        builder.append("'").append(rand.nextInt(1, 10)).append("', ");
        builder.append("'").append(categoryId).append("'");
        builder.append(String.format(", 'Item#%s', ", rand.nextInt(0, 1000)));
        builder.append("'Desc', ");
        builder.append("'").append(rand.nextInt(0, 100)).append("', ");
        builder.append("'").append(new Date()).append("');");
        //System.out.println("RUNNING: " + builder);
        try {
            conn = ds.getConnection();
            conn.createStatement().executeQuery(builder.toString());
            System.out.println("added!");
            conn.close();
        } catch (SQLException e) {
            //System.out.println(e);
        } finally {
        }
    }

    public JSONArray getAllListings() {
        Connection conn;
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement("select * from listings").executeQuery();
            while (rs.next()) {
                arr.put(new JSONObject(createListing(rs)));
            }
            conn.close();
            return arr;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }

    }

    public JSONArray getListingsByCategory(Long categoryId) {

        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        Connection conn;
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement(String.format("select * from listings WHERE category_id =%s", categoryId)).executeQuery();
            while (rs.next()) {
                arr.put(new JSONObject(createListing(rs)));
            }
            conn.close();
            return arr;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    private Listing createListing(ResultSet rs) throws SQLException {
        Listing listing = new Listing();
        listing.setBuyerId(rs.getLong("buyer_id"));
        listing.setListerId(rs.getLong("lister_id"));
        listing.setCategoryId(rs.getLong("category_id"));
        listing.setListingId(rs.getLong("listing_id"));
        listing.setName(rs.getString("name"));
        listing.setDescription(rs.getString("description"));
        listing.setPrice(rs.getString("price"));
        return listing;
    }
}
