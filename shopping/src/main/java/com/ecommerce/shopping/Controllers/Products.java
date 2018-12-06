package com.ecommerce.shopping.Controllers;

import com.ecommerce.shopping.Domain.Product;
import com.ecommerce.shopping.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @GetMapping(path = "/search/{productName}")
    public Set<Product> searchProductsByName(@PathVariable("productName")String productName,HttpServletResponse response){
        //implement search logic here
        response.setStatus(HttpServletResponse.SC_OK);
        Set<Product> products = new HashSet<>();
        Product prod = new Product();
        prod.setName("Cellphone");
        prod.setPrice(15);
        prod.setAmount(15);
        prod.setProductId(11);
        products.add(prod);

        return products;
    }
}
