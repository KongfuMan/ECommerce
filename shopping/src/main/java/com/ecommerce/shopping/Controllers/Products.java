package com.ecommerce.shopping.Controllers;

import com.ecommerce.shopping.Domain.Product;
import com.ecommerce.shopping.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/product")
public class Products {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/list")
    public List<Product> getProductList(){
        return productService.getAllProducts();
    }

    @GetMapping(path = "/one/{id}")
    public Product getAProductDetail(@PathVariable("id")int id){
        return productService.getOneProudct(id);
    }
}
