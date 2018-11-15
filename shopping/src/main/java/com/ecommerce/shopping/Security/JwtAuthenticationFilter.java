package com.ecommerce.shopping.Security;

import com.ecommerce.shopping.Domain.Security.UserRole;
import com.ecommerce.shopping.Domain.User;
import com.ecommerce.shopping.Services.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.util.StringUtils;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Set;

import static com.ecommerce.shopping.Security.SecurityConstants.HEADER_STRING;
import static com.ecommerce.shopping.Security.SecurityConstants.TOKEN_PREFIX;

// responsible for user Authentication
// when user make a request, validate its jwt first
// (BasicAuthenticationFilter extends OncePerRequestFilter)
// BasicAuthenticationFilter is responsible for
// processing basic authentication credentials presented in HTTP headers
public class JwtAuthenticationFilter extends BasicAuthenticationFilter {

    private JwtService jwtService;
    private UserDetailsService userDetailsService;

    public JwtAuthenticationFilter(JwtService jwtService,
                                   UserDetailsService userDetailsService,
                                   AuthenticationManager authManager) {
        super(authManager);
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String jwt = resolveToken(request);// extract username and password from the request

        // validate the request by its header
        if (jwt != null) {
            Authentication authentication = getAuthentication(jwt); //find if user in the token exists in databse
            if (authentication != null){
                // When getAuthentication returns an Authentication object the filter puts it into a thread local variable
                // SecurityContextHolder.getContext().setAuthentication(authentication)
                // so other parts of the application have access to the authentication object.
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }
        chain.doFilter(request, response);
    }

    //resolve header
    private static String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(HEADER_STRING);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith(TOKEN_PREFIX)) {
            return bearerToken.substring(7, bearerToken.length());
        }
        return null;
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String jwt) {
        UserDetails userDetails = jwtService.verifyToken(jwt);
        return new UsernamePasswordAuthenticationToken(userDetails, "",
            userDetails.getAuthorities());
    }

}
