package com.ecommerce.shopping.Services;

import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Domain.Security.UserRole;
import com.ecommerce.shopping.Domain.User;
import com.ecommerce.shopping.Repositories.RoleRepository;
import com.ecommerce.shopping.Repositories.UserRepository;
import com.ecommerce.shopping.Repositories.UserRoleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.naming.AuthenticationException;
import javax.transaction.Transactional;
import java.nio.file.AccessDeniedException;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;


    //bussiness logic of login authenticate
    //    public String authenticateUser(String userName, String password) throws Exception{
    //        if (userName == null){
    //            return "";
    //        }
    //        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
    //                userName, password);
    //        this.authenticationManager.authenticate(authenticationToken);
    //        return jwtService.createToken(userName);
    //    }

    public String authenticateUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }

        User localUser = userRepository.findByUsername(user.getUsername());
        if (localUser != null){
            Set<UserRole> userRoles = userRoleRepository.findUserRolesByUsername(localUser.getUsername());
            String[] rolenames = new String[userRoles.size()];
            int index = 0;
            for (UserRole userRole : userRoles){
                rolenames[index++] = userRole.getRole().getName();
            }
            String jwt = jwtService.createToken(user.getUsername(), rolenames);
            return jwt;
        }

        throw new UsernameNotFoundException("User name " + user.getUsername() + " not found");
    }

    @Transactional
    public String createNewUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }

        User localUser = userRepository.findByUsername(user.getUsername());
        if (localUser == null){
            Role role = roleRepository.findByName("CUSTOMER");
            Set<UserRole> userRoles = new HashSet();
            userRoles.add(new UserRole(user,role));
            user.setUserRoles(userRoles);
            userRepository.save(user);

            String[] rolenames = new String[userRoles.size()];
            int index = 0;
            for (UserRole userRole : userRoles){
                rolenames[index++] = userRole.getRole().getName();
            }
            String jwt = jwtService.createToken(user.getUsername(), rolenames);
            return jwt;
        }

        LOG.info("User with username {} already exist! Change another username", user.getUsername());
        throw new UsernameNotFoundException("Failed to create new user");
    }
    //only used for testing
//    public void addTestUser(){
//        User user = new User();
//        user.setFirstName("Eric");
//        user.setPassword("p");
//
//        Role role = new Role();
//        role.setName("ROLE_USER");
//        Set<UserRole> userRole = new HashSet();
//        userRole.add(new UserRole(user,role));
//        user.setUserRoles(userRole);
//        user.setEmail("user@gmail.com");
//
//        User admin = new User();
//        user.setFirstName("admin");
//        user.setPassword("p");
//
//        Role role_admin = new Role();
//        role.setName("ROLE_ADMIN");
//        Set<UserRole> adminRole = new HashSet();
//        userRole.add(new UserRole(admin,role_admin));
//        user.setUserRoles(adminRole);
//        user.setEmail("admin@gmail.com");
//
//        userRepository.save(user);
//        userRepository.save(admin);
//    }
}
