package com.example.Sync.Chat.App.Services;
import com.example.Sync.Chat.App.Model.OnlineUser;
import com.example.Sync.Chat.App.Model.UserOperations;
import com.example.Sync.Chat.App.Database.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
public class AddUser {
    private final UserRepository userRepository;


    public AddUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void registerUser(String name, String username){
        OnlineUser newUser = OnlineUser.createUser(name, username);

//        save to the jpa repository
        userRepository.save(newUser);
    }
}
