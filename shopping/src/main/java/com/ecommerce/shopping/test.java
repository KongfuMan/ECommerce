package com.ecommerce.shopping;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

public class test {
    AuthenticationManager AuthManager;
    AuthenticationProvider authProvider;
    ProviderManager implAuthenticateManager;
    AuthenticationManagerBuilder managerBuilder;
    UsernamePasswordAuthenticationFilter usernamePasswordAuthenticationFilter;
    BasicAuthenticationFilter basicAuthenticationFilter;
    FilterSecurityInterceptor filterSecurityInterceptor;
}
