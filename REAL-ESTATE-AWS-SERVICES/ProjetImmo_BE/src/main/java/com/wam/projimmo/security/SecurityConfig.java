package com.wam.projimmo.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${VITE_FRONTEND_SUBDOMAIN}")
    private String frontendSubdomain;

    @Value("${MY_DOMAIN}")
    private String myDomain;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/user/signIn").permitAll()
                .requestMatchers("/api/user/signUp").permitAll()
                .requestMatchers("/api/user/getById/{id}").permitAll()  // Allow user profile access
                .requestMatchers("/api/maisons/getAll").permitAll()  // Public property browsing
                .requestMatchers("/api/maisons/getById/{id}").permitAll()  // Public property details
                .requestMatchers("/api/region/**").permitAll()  // Public region data
                .requestMatchers("/api/maisonLiked/getAllMaisonLiked/{idUser}").permitAll()  // Allow liked items access
                .requestMatchers("/api/maisonLiked/addLike/{idUser}/{idMaison}").permitAll()  // Allow adding likes
                .requestMatchers("/api/maisonLiked/removeLike/{idUser}/{idMaison}").permitAll()  // Allow removing likes
                .anyRequest().authenticated()  // Require authentication for everything else
            );

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        String frontendUrl = "https://" + frontendSubdomain + "." + myDomain;
        configuration.setAllowedOrigins(Arrays.asList(frontendUrl, "http://localhost:3000", "http://localhost:9090"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

