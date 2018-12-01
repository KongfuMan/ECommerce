package com.ecommerce.shopping.Services;

import com.ecommerce.shopping.Config.SecurityUtility;
import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Domain.User;
import com.ecommerce.shopping.Exceptions.UsernameAlreadyExistsExceptions;
import com.ecommerce.shopping.Repositories.RoleRepository;
import com.ecommerce.shopping.Repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private SecurityUtility securityUtility;

    public String authenticateUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }
        Authentication authentication = new UsernamePasswordAuthenticationToken(user.getUsername(),user.getPassword());
        Authentication authResult = authenticationManager.authenticate(authentication);
        return jwtService.createToken((User)authResult.getPrincipal());
    }

    @Transactional
    public String createNewUser(User user) throws Exception{
        if (user == null){
            throw new UsernameNotFoundException("User data is empty");
        }

        User localUser = userRepository.findByUsername(user.getUsername());
        if (localUser != null){
            throw new UsernameAlreadyExistsExceptions("Username {} already exist! Change another username");
        }else{
            String encryptedPsw = securityUtility.passwordEncoder().encode(user.getPassword());
            user.setPassword(encryptedPsw);
            Role role = roleRepository.findByName("CUSTOMER");
            role.getUsers().add(user);
            user.setUserRole(role);
            userRepository.save(user);
            String jwt = jwtService.createToken(user);
            return jwt;
        }
    }
}
