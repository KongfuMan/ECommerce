package com.ecommerce.shopping.Security;

import com.ecommerce.shopping.Services.JwtService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.ecommerce.shopping.Security.SecurityConstants.HEADER_STRING;
import static com.ecommerce.shopping.Security.SecurityConstants.TOKEN_PREFIX;

public class JwtAuthenticationFilter extends GenericFilterBean {

    private JwtService jwtService = new JwtService();

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        if (servletRequest instanceof HttpServletRequest && servletResponse instanceof HttpServletResponse){
            HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
            String jwt = resolveToken(httpServletRequest);
            if (jwt != null) {
                Authentication authentication = getAuthentication(jwt);
                if (authentication != null){
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
            filterChain.doFilter(servletRequest, servletResponse);
            this.resetAuthenticationAfterRequest(); //?why reset?

        }else {
            throw new ServletException("JwtAuthenticationFilter just supports HTTP requests");
        }
    }

    private void resetAuthenticationAfterRequest() {
        SecurityContextHolder.getContext().setAuthentication(null);
    }

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
