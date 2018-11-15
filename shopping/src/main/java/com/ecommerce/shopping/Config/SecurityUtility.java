package com.ecommerce.shopping.Config;


import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Random;

@Component
public class SecurityUtility {
    private static final String SALT = "12312312443wejwoerjwe@#$%$#$%^&kshfd";  //


    @Bean
    public static BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(12, new SecureRandom(SALT.getBytes()));
    }

    @Bean
    public static String RandomPassowrd(){
        final String SALTCHARS = "qwertyuiopasdfghjklzxcvbnm1234567890";
        StringBuilder salt = new StringBuilder();
        Random rnd = new Random();

        //randomly pick 18 characters from  SALTCHARS;
        while(salt.length() < 18){
            int index = (int)(rnd.nextFloat() * SALTCHARS.length());
            salt.append(SALTCHARS.charAt(index));
        }
        return salt.toString() ;
    }
}
