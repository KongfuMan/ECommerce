package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
