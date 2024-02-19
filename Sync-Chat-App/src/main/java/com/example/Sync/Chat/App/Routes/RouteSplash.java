package com.example.Sync.Chat.App.Routes;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RouteSplash {

    @GetMapping("/")
    public String splashPage(){
        System.out.println("Splash Page Controller Invoked");
        return "splashPage";
    }

    @GetMapping("/registration")
    public String registration(){
        return "registration";
    }

    @GetMapping("/error")
    public String error() {
        return "error";
    }


}
