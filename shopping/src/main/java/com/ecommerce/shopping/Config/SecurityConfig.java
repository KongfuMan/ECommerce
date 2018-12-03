package com.ecommerce.shopping.Config;

import com.ecommerce.shopping.Security.JwtAuthenticationFilter;
import com.ecommerce.shopping.Services.UserSecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.BeanIds;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.mapping.GrantedAuthoritiesMapper;
import org.springframework.security.core.authority.mapping.SimpleAuthorityMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.ecommerce.shopping.Security.SecurityConstants.SIGN_IN_URL;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

    @Autowired
    private UserSecurityService userSecurityService;

    private static final String[] PUBLIC_MATCHERS = {
            "/",
            "/product/**",
            "/user/signin",
            "/user/signup"
    };

    @Autowired
    private PasswordEncoder passwordEncoder(){
        return SecurityUtility.passwordEncoder();
    }

    private LoginUrlAuthenticationEntryPoint createEntryPoint(){
        LoginUrlAuthenticationEntryPoint entryPoint = new LoginUrlAuthenticationEntryPoint(SIGN_IN_URL);
        entryPoint.setUseForward(true);
        return entryPoint;
    }

    // map the role in security to role in database
//    @Bean
//    public GrantedAuthoritiesMapper authoritiesMapper(){
//        SimpleAuthorityMapper authorityMapper = new SimpleAuthorityMapper();
//        //every authority that comes out of databse will be converted
//        //into uppercase and then add a ROLE_ in front of it
//        authorityMapper.setConvertToUpperCase(true);
//        authorityMapper.setDefaultAuthority("USER");
//        return authorityMapper;
//    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userSecurityService).passwordEncoder(passwordEncoder());
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JwtAuthenticationFilter customFilter = new JwtAuthenticationFilter();
        http.addFilterBefore(customFilter,UsernamePasswordAuthenticationFilter.class);

        http.csrf().disable().cors().disable()
                .authorizeRequests()
                    .antMatchers("/admin/**").hasAuthority("ADMIN")
                    .antMatchers(PUBLIC_MATCHERS).permitAll()
                    .anyRequest().authenticated();
//                    .and().logout().logoutUrl("/user/signout");
//                .and().oauth2Login();

    }

//    @Autowired
//    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception{
//        // use the database username and password to match the request username and password
//        auth.userDetailsService(userSecurityService).passwordEncoder(passwordEncoder());
//    }

    @Bean(BeanIds.AUTHENTICATION_MANAGER)
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
