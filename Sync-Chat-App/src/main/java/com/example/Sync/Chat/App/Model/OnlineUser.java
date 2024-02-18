package com.example.Sync.Chat.App.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.security.SecureRandom;

@Entity
public class OnlineUser {
//    THE CHARACTERISTICS THAT DEFINE THE ONLINE USER
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String username;


    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public void setName(String name) {
        this.name = name;

    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setId(Long id) {
        this.id = id;
    }


//    NOW CREATE THE USER
    public static OnlineUser createUser(String name, String username){
        OnlineUser newUser = new OnlineUser();
        newUser.setName(name);
        newUser.setUsername(username);
        return newUser;
    }
}




