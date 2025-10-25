package com.wam.projimmo.repositories;

import com.wam.projimmo.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u WHERE u.idUser = :id")
    User findUserById(@Param("id") Long id);

    @Query(value = "SELECT * FROM user  WHERE email = :email", nativeQuery = true)
    User findUserByEmail(@Param("email") String email);
}