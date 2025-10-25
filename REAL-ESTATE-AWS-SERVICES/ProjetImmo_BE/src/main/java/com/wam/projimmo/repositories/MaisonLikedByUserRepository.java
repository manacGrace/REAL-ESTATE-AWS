package com.wam.projimmo.repositories;

import com.wam.projimmo.entities.MaisonLikedByUser;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaisonLikedByUserRepository extends JpaRepository<MaisonLikedByUser, Long> {
    @Query(value = "SELECT DISTINCT maison_id_maison FROM maison_liked_by_user WHERE user_id_user = :idUser", nativeQuery = true)
    List<Long> findMaisonIdByUserId(@Param("idUser") Long idUser);

    @Transactional //Pour que la Db se dit "ok la db va modifier: delete ou commit"
    @Modifying // dit a JPA que on ne va pas faire un SELECT
    @Query(value = "DELETE FROM maison_liked_by_user WHERE maison_id_maison = :idMaison AND user_id_user = :idUser", nativeQuery = true)
    int deleteMaisonLikedByUser(@Param("idMaison") Long idMaison, @Param("idUser") Long idUser);

    @Query(value = "SELECT * FROM maison_liked_by_user WHERE maison_id_maison = :idMaison AND user_id_user = :idUser", nativeQuery = true)
    MaisonLikedByUser findSpecificMaisonLikedByUser(@Param("idMaison") Long idMaison, @Param("idUser") Long idUser);


}