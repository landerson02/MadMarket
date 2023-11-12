package com.madhacks.madmarket.service;

import com.madhacks.madmarket.config.CloudSqlConnectionPoolFactory;
import com.madhacks.madmarket.repository.Listing;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.DataSource;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Date;
import java.util.Random;


@Service
public class ListingService {

    @Autowired
    CloudSqlConnectionPoolFactory poolFactory;

    /**
     * Adds a listing to the database
     */
    public void addListing(long listingId, long buyerId, long listerId, long categoryId,
                           String name, String description, float price) {
        DataSource ds = poolFactory.getDataSource();
       try (Connection conn = ds.getConnection()) {
           String query = String.format("INSERT INTO listings (listing_id, buyer_id, lister_id, category_id, name, description, price, timestamp) " +
                   "VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s');", listingId, buyerId, listerId, categoryId, name, description, price, new Date());
           System.out.println(query);
           String userListingQuery = String.format("INSERT INTO UserListings (UserID, ListingID) VALUES ('%s', '%s');", listerId, listingId);
           conn.createStatement().execute(query);
           conn.createStatement().execute(userListingQuery);
        } catch (SQLException e) {
            System.out.println(e);
        }

    }

    /**
     * Adds a listing to the database for testing purposes
     */
    public void addListingTest(long categoryId) {
        DataSource ds = poolFactory.getDataSource();
        Random rand = new Random();
        Connection conn;
        StringBuilder builder = new StringBuilder();
        builder.append("INSERT INTO listings (listing_id, buyer_id, lister_id, category_id, name, description, price, timestamp) VALUES ( ");
        long listingId = rand.nextInt(1, 999999999);
        builder.append("'").append(listingId).append("', ");
        builder.append("'").append(rand.nextInt(1, 10)).append("', ");
        long listerId = rand.nextInt(1, 5);
        builder.append("'").append(listerId).append("', ");
        builder.append("'").append(categoryId).append("'");
        builder.append(String.format(", 'Item#%s', ", rand.nextInt(0, 1000)));
        builder.append("'Desc', ");
        builder.append("'").append(rand.nextFloat(0, 1000)).append("', ");
        builder.append("'").append(new Date()).append("');");
        System.out.println("RUNNING: " + builder);
        try {
            conn = ds.getConnection();
            String userListingQuery = String.format("INSERT INTO UserListings (UserID, ListingID) VALUES ('%s', '%s');", listerId, listingId);
            System.out.println(userListingQuery);
            conn.createStatement().execute(builder.toString());
            conn.createStatement().execute(userListingQuery);
            conn.close();
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    /**
     * Gets all listings
     */
    public JSONArray getAllListings() {
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        try (Connection conn = ds.getConnection()) {
            ResultSet rs = conn.prepareStatement("select * from listings").executeQuery();
            while (rs.next()) {
                arr.put(new JSONObject(createListing(rs)));
            }
            rs.close();
            return arr;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }

    }

    /**
     * Gets all listings by a category id
     */
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

    /**
     * Creates a listing object from a result set
     */
    private Listing createListing(ResultSet rs) throws SQLException {
        Listing listing = new Listing();
        listing.setBuyerId(rs.getLong("buyer_id"));
        listing.setListerId(rs.getLong("lister_id"));
        listing.setCategoryId(rs.getLong("category_id"));
        listing.setListingId(rs.getLong("listing_id"));
        listing.setName(rs.getString("name"));
        listing.setDescription(rs.getString("description"));
        listing.setPrice(rs.getFloat("price"));
        listing.setTimestamp(rs.getDate("timestamp"));
        return listing;
    }

    /**
     * Deletes a listing from the database
     */
    public void deleteListing(Long listingId) {
        DataSource ds = poolFactory.getDataSource();
        try (Connection conn = ds.getConnection()) {
            String query = String.format("DELETE FROM listings WHERE listing_id = '%s';", listingId);
            conn.createStatement().execute(query);
        } catch (SQLException e) {
            System.out.println(e);
        }
    }

    public JSONObject getListingById(long listingId) {
        DataSource ds = poolFactory.getDataSource();
        Connection conn;
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement(String.format("select * from listings WHERE listing_id =%s", listingId)).executeQuery();
            rs.next();
            JSONObject json = new JSONObject(createListing(rs));
            conn.close();
            return json;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    public JSONArray getListingsByListerId(long listerId) {
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        Connection conn;
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement(String.format("select * from listings WHERE lister_id =%s", listerId)).executeQuery();
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

    public JSONArray getListingsByBuyerId(long buyerId) {
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        Connection conn;
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement(String.format("select * from listings WHERE buyer_id =%s", buyerId)).executeQuery();
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

    public JSONArray getListingsByUserId(Long userId) {
        DataSource ds = poolFactory.getDataSource();
        JSONArray arr = new JSONArray();
        Connection conn;
        try {
            conn = ds.getConnection();
            ResultSet rs = conn.prepareStatement(String.format("SELECT Listings.*\n" +
                    "FROM Users\n" +
                    "JOIN UserListings ON Users.ID = UserListings.UserID\n" +
                    "JOIN Listings ON UserListings.ListingID = Listings.Listing_ID\n" +
                    "WHERE Users.ID = %s;\n", userId)).executeQuery();
            while (rs.next()) {
                System.out.println("here");
                arr.put(new JSONObject(createListing(rs)));
            }
            conn.close();
            return arr;
        } catch (SQLException e) {
            System.out.println(e);
            return null;
        }
    }

    public void uploadImage(MultipartFile file, Long listingId) {
        DataSource ds = poolFactory.getDataSource();
        try (Connection conn = ds.getConnection()) {
            String query = String.format("INSERT INTO images (listing_id, image) VALUES ('%s', '%s');", listingId, file.getBytes());
            System.out.println(query);
            conn.createStatement().execute(query);
        } catch (SQLException | IOException e) {
            System.out.println(e);
        }
    }
}
