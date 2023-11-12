package com.madhacks.madmarket.controller;

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

}
