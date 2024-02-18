package com.example.Sync.Chat.App.Api;


import com.example.Sync.Chat.App.Database.UserDatabaseOperations;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")

public class HttpController {

    private final UserDatabaseOperations userOperations;

    public HttpController(UserDatabaseOperations userOperations) {
        this.userOperations = userOperations;
    }
}
