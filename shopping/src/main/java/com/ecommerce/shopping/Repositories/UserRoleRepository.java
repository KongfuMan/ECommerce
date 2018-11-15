package com.ecommerce.shopping.Repositories;

import com.ecommerce.shopping.Domain.Security.UserRole;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface UserRoleRepository extends CrudRepository<UserRole,Long> {

    @Query(value = "SELECT User_Role.* " +
            "FROM User, User_Role " +
            "WHERE User.id = User_Role.user_id AND User.username=?1",nativeQuery = true)
    public Set<UserRole> findUserRolesByUsername(String username);

}
