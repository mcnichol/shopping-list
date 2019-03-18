package io.mcnichol.home.shoppinglist;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebsiteController {
    @GetMapping("/")
    public String main(){
        return "index";
    }
}
