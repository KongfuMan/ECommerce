package com.ecommerce.shopping.Controllers;


import com.ecommerce.shopping.Domain.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/admin")
public class Admin {

    @GetMapping(path = "/test")
    public String test(){
        return "test authority success!";
    }
}
