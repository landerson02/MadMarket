package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.repository.Listing;
import com.madhacks.madmarket.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "https://madmarket-frontend.uc.r.appspot.com/"})
public class ListingController {

    @Autowired
    ListingService listingService;

    @GetMapping("/getListingsByCategory")
    public String getListingsByCategory(long categoryId) {
        return listingService.getListingsByCategory(categoryId).toString();
    }

    @GetMapping("/getAllListings")
    public String getAllListings() {
        return listingService.getAllListings().toString();
    }

    @PostMapping("/addListing")
    public void addListing(@RequestBody Listing listing, @RequestParam("file") MultipartFile file) {
        listingService.addListing(listing.getListingId(), listing.getBuyerId(), listing.getListerId(),
                listing.getCategoryId(), listing.getName(), listing.getDescription(), listing.getPrice());

    }

    @GetMapping("/testList")
    public void testListing() {
        File f = new File("/main/resources/static/bucky_home.jpg");
        System.out.println(f.exists());
        //listingService.uploadImage(f, 123L);
    }


    @GetMapping("/deleteListing")
    public void deleteListing(Long listingId) {
        listingService.deleteListing(listingId);
    }

//    @GetMapping("/getListingsByUserId")
//    public String getListingsByUserId(long userId) {
//        return listingService.getListingsByUserId(userId).toString();
//    }

    @GetMapping("/getListingById")
    public String getListingById(long listingId) {
        return listingService.getListingById(listingId).toString();
    }

    @GetMapping("/getListingsByListerId")
    public String getListingsByListerId(long listerId) {
        return listingService.getListingsByListerId(listerId).toString();
    }

    @PostMapping("/saveListing")
    public void saveListing(long userId, long listingId) {
        listingService.saveListing(userId, listingId);
    }

    @GetMapping("/getSavedListings")
    public String getSavedListings(long userId) {
        return listingService.getSavedListings(userId).toString();
    }

    @GetMapping("/getListingsByBuyerId")
    public String getListingsByBuyerId(long buyerId) {
        return listingService.getListingsByBuyerId(buyerId).toString();
    }

    @GetMapping("/addListingTEST")
    public void addListing() {
        int MAX_ID = 7;
        int NUM_TIMES = 10;
        for (int j = 0; j < NUM_TIMES; ++j) {
            for (int i = 1; i <= MAX_ID; ++i) {
                listingService.addListingTest(i);
            }
        }
    }


}
