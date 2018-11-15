package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Security.UserRole;
import com.ecommerce.shopping.Domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public User findByUsername(String username);
}
