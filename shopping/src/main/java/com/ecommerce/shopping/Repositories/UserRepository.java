package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
}
