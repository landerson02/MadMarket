package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.repository.User;
import com.madhacks.madmarket.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public void signUpUser(@RequestBody User user) {
        String success = userService.addUser(user.getName(), user.getEmail(), user.getPhone());
        System.err.println(success);
    }

    @GetMapping("/getUserFromEmail")
    public String getUserFromEmail(String email) {
        JSONObject obj = userService.getUserFromEmail(email);
        return obj != null ? obj.toString() : null;
    }


}
