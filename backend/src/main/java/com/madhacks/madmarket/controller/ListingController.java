package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.repository.Listing;
import com.madhacks.madmarket.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
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
    public void addListing(@RequestBody Listing listing) {

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
