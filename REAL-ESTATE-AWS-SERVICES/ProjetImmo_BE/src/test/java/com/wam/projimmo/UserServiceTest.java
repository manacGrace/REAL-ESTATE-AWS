package com.wam.projimmo;

import com.wam.projimmo.entities.User;
import com.wam.projimmo.repositories.UserRepository;
import com.wam.projimmo.services.UserService;
import com.wam.projimmo.security.SecurityConfig;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

/*Aymen*/
public class UserServiceTest {

    @Test
    public void testSearchUserByEmail_returnUser() {
        UserRepository mockRepos = mock(UserRepository.class);
        SecurityConfig mockSecurity = mock(SecurityConfig.class);
        UserService userService = new UserService(mockRepos, null);

        String email = "test@test.com";

        User user = new User();
        user.setEmail(email);


        when(mockRepos.findUserByEmail(email)).thenReturn(user);

        User result = userService.searchUserByEmail(email);

        assertNotNull(result);
        assertEquals(email, result.getEmail());
    }
}


