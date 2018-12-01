package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Domain.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface RoleRepository extends CrudRepository<Role,Long>{

    public Role findByName(String rolename);

    public Role findByUsers(User user);

    @Query(value = "SELECT Role.* FROM User, Role WHERE " +
            "User.user_role_id = Role.role_id", nativeQuery = true)
    public Role findByUsername(String username);
}
