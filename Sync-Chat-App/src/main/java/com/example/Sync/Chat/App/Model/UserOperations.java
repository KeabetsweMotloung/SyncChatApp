package com.example.Sync.Chat.App.Model;

public interface UserOperations {

//DEFINES WHAT A USER CAN DO
    void sendTextMessage(String message);
    void receiveTextMessage(String message);

    void createChatRoom(String roomName);
    void joinChatRoom(String roomName);
    void leaveChatRoom(String roomName);

    void registerUser(String name, String username);

    OnlineUser getUserById(Long userId);
}
