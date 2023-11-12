package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public void signUpUser(String name, String email, String phone) {
        System.out.println("name: " + name);
        userService.addUser(name, email, phone);
    }


}
