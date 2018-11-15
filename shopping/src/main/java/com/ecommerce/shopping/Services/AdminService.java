package com.ecommerce.shopping.Services;

import com.ecommerce.shopping.Domain.Product;
import com.ecommerce.shopping.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private ProductRepository productRepository;

    public void addProduct(List<Product> productList){

    }


    public void deleteProduct(List<Product> productList){

    }
}
