package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category, Integer> {
}
