package com.example.Sync.Chat.App.Database;

import com.example.Sync.Chat.App.Model.OnlineUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<OnlineUser, Long> {

//    Defines CRUD operations


}
