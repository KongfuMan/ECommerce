package com.ecommerce.shopping.Services;


import com.ecommerce.shopping.Domain.Product;
import com.ecommerce.shopping.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepo;



    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

    public Product getOneProudct(int id){
        return productRepo.findByProductId(id);
    }

}
