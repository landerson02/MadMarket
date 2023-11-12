package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.service.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ListingController {

    @Autowired
    ListingService listingService;

    @PostMapping("/getListingsByCategory")
    public String getListingsByCategory(@RequestBody final long categoryId) {
        return listingService.getListingsByCategory(categoryId).toString();
    }

    @GetMapping("/getAllListings")
    public String getAllListings() {
        return listingService.getAllListings().toString();
    }

}
