package com.madhacks.madmarket.controller;

import com.madhacks.madmarket.repository.User;
import com.madhacks.madmarket.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "https://madmarket-frontend.uc.r.appspot.com/")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public String signUpUser(@RequestBody User user) {
        return userService.addUser(user.getName(), user.getEmail(), user.getPhone());
    }

    @GetMapping("/testing")
    public String test() {
        return "test";
    }

    @GetMapping("/getUserFromEmail")
    public String getUserFromEmail(String email) {
        JSONObject obj = userService.getUserFromEmail(email);
        return obj != null ? obj.toString() : null;
    }

    @PostMapping("/updateUser")
    public String updateUser(@RequestBody User user) {
        return userService.updateUser(user.getId(), user.getName(), user.getEmail(), user.getPhone());
    }


}
