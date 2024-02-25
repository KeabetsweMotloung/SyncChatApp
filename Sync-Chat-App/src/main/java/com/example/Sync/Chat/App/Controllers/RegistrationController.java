package com.example.Sync.Chat.App.Controllers;

import com.example.Sync.Chat.App.Database.UserRepository;
import com.example.Sync.Chat.App.Model.OnlineUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/registration")
public class RegistrationController {

    private final UserRepository userRepository;

    public RegistrationController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/Sign Up")
    public String submitRegistrationForm(OnlineUser user, Model model) {

        userRepository.save(user);

//         Redirect to a success page or any other desired page
        return null;
    }

}
