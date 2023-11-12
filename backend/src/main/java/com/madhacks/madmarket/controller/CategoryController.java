package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.service.CategoryService;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "https://madmarket-frontend.uc.r.appspot.com/"})
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/getAllCategories")
    public String getAllCategories() {
        JSONArray objs = categoryService.fetchAllCategories();
        return objs.toString();
    }

    @GetMapping("/getAllSubCategories")
    public String getAllSubCategories() {
        JSONArray objs = categoryService.fetchAllCategories();
        return objs.toString();
    }

}
