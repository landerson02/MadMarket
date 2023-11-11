package com.madhacks.madmarket.controller;

import com.google.api.client.json.Json;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class ListingController {

    @GetMapping("/getListing")
    public Json getListing() {

        return null;
    }

}
