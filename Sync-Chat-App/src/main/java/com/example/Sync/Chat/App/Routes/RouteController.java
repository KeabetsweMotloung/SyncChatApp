package com.example.Sync.Chat.App.Routes;
import com.example.Sync.Chat.App.Database.UserDatabaseOperations;
import com.example.Sync.Chat.App.Database.UserRepository;
import com.example.Sync.Chat.App.Model.OnlineUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RouteController {

    private final UserRepository userRepository;

    @Autowired
    public RouteController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public String splashPage(){
        System.out.println("Splash Page Controller Invoked");
        return "splashPage";
    }

    @GetMapping("/chatRoom")
    public String chatRoom() {
        return "chatRoom";
    }

    @GetMapping("/registration")
    public String showRegistrationPage() {
        return "registration";
    }



    @PostMapping("/registration")
    public String registration(@RequestParam String name, @RequestParam String username, @RequestParam String pwd) {
//        CREATE A NEW USER and save the user
        OnlineUser newUser = OnlineUser.createUser(name,username);
        userRepository.save(newUser);
        return "chatRoom";
    }

    @GetMapping("/login")
    public String login(){
        return "login";
    }

//    @GetMapping("/custom-error")
//    public String handleError() {
//        return "error";
//    }


}
