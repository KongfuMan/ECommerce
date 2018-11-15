package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Security.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends CrudRepository<Role,Long>{

    public Role findByName(String rolename);
}
