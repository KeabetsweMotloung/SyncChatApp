package com.example.Sync.Chat.App.Database;

import com.example.Sync.Chat.App.Model.OnlineUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(String name, String username, String password) {
        try {
            // Create a new user
            OnlineUser newUser = new OnlineUser();
            newUser.setName(name);
            newUser.setUsername(username);
            newUser.setPassword(password); // Set the password

            // Save the user to the database
            OnlineUser savedUser = userRepository.save(newUser);

            // Log or print details for verification
            System.out.println("Saved User: " + savedUser);
        } catch (Exception e) {
            // Log the exception
            e.printStackTrace();
            // Handle the exception as needed (e.g., return an error response)
        }
    }
}

