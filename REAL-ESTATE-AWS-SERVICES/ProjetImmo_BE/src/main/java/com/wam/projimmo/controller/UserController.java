package com.wam.projimmo.controller;

import com.wam.projimmo.entities.Credentials;
import com.wam.projimmo.entities.User;
import com.wam.projimmo.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.searchAllUsers();
    }

    @GetMapping("/getById/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.searchUserById(id);
    }

    @GetMapping("/getByEmail/{email}")
    public User getUserByEmail(@PathVariable String email) {
        return userService.searchUserByEmail(email);
    }

    @PostMapping("/signUp")
    public Boolean signUp(@RequestBody User user) {
        return userService.signUpService(user);
    }

    @PostMapping("/signIn")
    public Long signIn(@RequestBody Credentials credentials) {
        return userService.signInService(credentials);
    }
}