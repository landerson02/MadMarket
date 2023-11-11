package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.service.CategoryService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("/getAllCategories")
    public void getAllCategories() {
        ArrayList<JSONObject> objs = categoryService.fetchAllCategories();
        System.out.println(objs.get(0));
    }

}
