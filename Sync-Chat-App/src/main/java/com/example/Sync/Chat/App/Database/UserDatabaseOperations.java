package com.example.Sync.Chat.App.Database;

import com.example.Sync.Chat.App.Model.OnlineUser;
import com.example.Sync.Chat.App.Model.UserOperations;

public class UserDatabaseOperations implements UserOperations {
    // Interact with the repository and implement the UserOperations interface.

    private final UserRepository userRepository;

    protected UserDatabaseOperations(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void sendTextMessage(String message) {
        // Implementation for sending a text message
    }

    @Override
    public void receiveTextMessage(String message) {
        // Implementation for receiving a text message
    }

    @Override
    public void createChatRoom(String roomName) {
        // Implementation for creating a chat room
    }

    @Override
    public void joinChatRoom(String roomName) {
        // Implementation for joining a chat room
    }

    @Override
    public void leaveChatRoom(String roomName) {
        // Implementation for leaving a chat room
    }

    @Override
    public void registerUser(String name, String username, String password) {
        OnlineUser newUser = OnlineUser.createUser(name, username, password);
        userRepository.save(newUser);
    }


    @Override
    public OnlineUser getUserById(Long userId) {
        return userRepository.findById(userId).orElse(null);
    }

    // Additional methods for interacting with UserRepository if needed


}
