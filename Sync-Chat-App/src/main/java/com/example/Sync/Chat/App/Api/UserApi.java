package com.example.Sync.Chat.App.Api;

import com.example.Sync.Chat.App.Database.UserService;
import com.example.Sync.Chat.App.Model.OnlineUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

@RequestMapping("/api/users")
public class UserApi {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody RegisterUserRequest request) {
        System.out.println("Received registration request:");
        System.out.println("Name: " + request.getName());
        System.out.println("Username: " + request.getUsername());
        System.out.println("Password: " + request.getPassword());
        // Call the UserService to register the user
        userService.registerUser(request.getName(), request.getUsername(), request.getPassword());
        return ResponseEntity.ok("User registered successfully");
    }

    // Define a static class for the request body
    static class RegisterUserRequest {
        private String name;
        private String username;
        private String password;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
