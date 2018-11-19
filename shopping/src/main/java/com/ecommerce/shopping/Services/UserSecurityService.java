package com.ecommerce.shopping.Services;

import com.ecommerce.shopping.Domain.Security.Authority;
import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Domain.Security.UserRole;
import com.ecommerce.shopping.Domain.User;
import com.ecommerce.shopping.Repositories.UserRepository;
import com.ecommerce.shopping.Repositories.UserRoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;


@Service
public class UserSecurityService implements UserDetailsService {

    private static final Logger  Log = LoggerFactory.getLogger(UserSecurityService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null){
            throw new UsernameNotFoundException("username: " + username + "not found! (chenlaing");
        }
        Set<UserRole> roles = userRoleRepository.findUserRolesByUsername(username);
        user.setUserRoles(roles);
        return user;
    }
}
