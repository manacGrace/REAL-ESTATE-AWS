package com.wam.projimmo.services;

import com.wam.projimmo.entities.Credentials;
import com.wam.projimmo.entities.User;
import com.wam.projimmo.repositories.UserRepository;
import com.wam.projimmo.security.SecurityConfig;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    private final SecurityConfig securityConfig;

    public UserService(UserRepository userRepository, SecurityConfig securityConfig) {
        this.userRepository = userRepository;
        this.securityConfig = securityConfig;
    }

    public List<User> searchAllUsers() {
        return userRepository.findAll();
    }

    public User searchUserById(Long id) {
        return userRepository.findUserById(id);
    }

    public User searchUserByEmail(String email) {
        return userRepository.findUserByEmail(email);
    }

    public boolean signUpService(User user) {
        if (searchUserByEmail(user.getEmail()) == null) {
            // Encodage du mot de passe avant de créer l'utilisateur
            String encodedPassword = securityConfig.passwordEncoder().encode(user.getPassword());

            // Création et sauvegarde du nouvel utilisateur avec le mot de passe encodé
            User newUser = userRepository.save(new User(
                    encodedPassword,
                    user.getEmail(),
                    user.getLastName(),
                    user.getFirstName()
            ));
            return true;
        }
        return false;
    }

    public Long signInService(Credentials credentials) {
        Long retourId = null;
        User u = userRepository.findUserByEmail(credentials.getEmail());
        if (u != null && securityConfig.passwordEncoder().matches(credentials.getPassword(), u.getPassword())) {
            retourId = u.getIdUser();
        }
        return retourId;
    }

}