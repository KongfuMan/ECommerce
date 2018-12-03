package com.ecommerce.shopping.Services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.ecommerce.shopping.Domain.Customer;
import com.ecommerce.shopping.Domain.Security.Role;
import com.ecommerce.shopping.Domain.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import com.ecommerce.shopping.Security.SecurityConstants;

import java.util.*;

@Service
public class JwtService {
    private final String secret = Base64.getEncoder().encodeToString(SecurityConstants.SECRET.getBytes());
    private final long tokenValidityInMilliseconds = SecurityConstants.EXPIRATION_TIME;

    public String createToken(final User user) throws Exception{
        Date now = new Date();
        Date validity = new Date(now.getTime() + this.tokenValidityInMilliseconds);
        Algorithm algorithm = Algorithm.HMAC256(this.secret);
        String token = JWT.create()
                .withJWTId(UUID.randomUUID().toString())
                .withSubject(user.getUsername())
                .withClaim("role",user.getUserRole().getName())
                .withClaim("id",user.getId())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .sign(algorithm);
        return token;
    }

    public String createToken(String username, String role) throws Exception{
        return "";
    }

    //parse the token for username
    public UserDetails verifyToken(String token) throws JWTVerificationException {
        //configure the JWTVerifer
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(this.secret))
                .build(); //Reusable verifier instance
        DecodedJWT jwt = verifier.verify(token);
        String rolename = jwt.getClaim("role").asString();
        User user = new Customer();
        user.setUsername(jwt.getSubject());
        Role role = new Role(rolename);
        role.getUsers().add(user);
        user.setUserRole(role);
        return user;
    }
}