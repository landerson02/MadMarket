package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Listing;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;

@Service
public class ListingService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    public JSONArray getAllListings() {
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        try {
            ResultSet rs = ds.getConnection().prepareStatement("select * from listings").executeQuery();
            while (rs.next()) {
                arr.put(new JSONObject(createListing(rs)));
            }
            return arr;
        } catch (SQLException e) {
            return null;
        }

    }

    public JSONArray getListingsByCategory(Long categoryId) {

        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        try {
            ResultSet rs = ds.getConnection().prepareStatement(String.format("select * from listings WHERE category_id =%s", categoryId)).executeQuery();
            while (rs.next()) {
                arr.put(new JSONObject(createListing(rs)));
            }
            return arr;
        } catch (SQLException e) {
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
