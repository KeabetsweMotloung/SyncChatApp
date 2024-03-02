package com.example.Sync.Chat.App;

import com.example.Sync.Chat.App.Database.UserRepository;
import com.example.Sync.Chat.App.Model.OnlineUser;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testSaveUser() {
        // Create a new user
        OnlineUser newUser = OnlineUser.createUser("John Doe", "john.doe");

        // Save the user to the database
        OnlineUser savedUser = userRepository.save(newUser);

        // Retrieve the user from the database using the ID
        OnlineUser retrievedUser = userRepository.findById(savedUser.getId()).orElse(null);

        // Assert that the retrieved user is not null
        assertNotNull(retrievedUser);

        // Print user details for verification
        System.out.println("Saved User: " + savedUser);
    }


}
