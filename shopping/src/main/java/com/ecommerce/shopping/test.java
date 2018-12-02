package com.ecommerce.shopping;

import org.springframework.security.access.SecurityMetadataSource;
import org.springframework.security.authentication.*;
import org.springframework.security.authentication.rcp.RemoteAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.SecurityFilterChain;
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
    SecurityFilterChain chain;
    DefaultSecurityFilterChain chainImpl;
    AnonymousAuthenticationProvider authProviderImpl;
    AuthenticationProvider rememberMeAuthenticationProvider;
    RemoteAuthenticationProvider uds;
    SecurityMetadataSource md;
}
