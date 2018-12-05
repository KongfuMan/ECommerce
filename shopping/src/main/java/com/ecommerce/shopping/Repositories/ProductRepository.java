package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface ProductRepository extends CrudRepository<Product, Integer> {
    public List<Product> findAll();

    public Product findByProductId(int id);
}
