package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.repository.User;
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
    public void signUpUser(@RequestBody User user) {
        System.out.println("name: " + user.getName());
        userService.addUser(user.getName(), user.getEmail(), user.getPhone());
    }


}
