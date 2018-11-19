package com.ecommerce.shopping.Controllers;

import com.ecommerce.shopping.Domain.User;
import com.ecommerce.shopping.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping(path = "/user/")
public class Auth {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/authenticate")
    public void authenticateUser(HttpServletRequest req, HttpServletResponse res){
        res.setStatus(HttpServletResponse.SC_OK);
        return;
    }

    @PostMapping(path = "/signup")
    public String signUp(@RequestBody User user, HttpServletResponse response)throws Exception{
        String jwt = userService.createNewUser(user);
        if (jwt != null){
            System.out.print(jwt);
            response.setStatus(HttpServletResponse.SC_OK);
            return jwt;
        }
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);    //401 page
        return null;
    }

    @PostMapping("/signin")
    public String signIn(@RequestBody User user, HttpServletResponse response)throws Exception{
        String jwt = userService.authenticateUser(user);
        if (jwt != null){
            System.out.print(jwt);
            response.setStatus(HttpServletResponse.SC_OK);
            return jwt;
        }
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);    //401 page
        return  null;
    }

    @GetMapping(path = "/test")
    public String test(){
        int i = 1;
        return "test success";
    }
}
