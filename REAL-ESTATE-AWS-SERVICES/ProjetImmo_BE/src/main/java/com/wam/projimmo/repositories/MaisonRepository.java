package com.wam.projimmo.repositories;

import com.wam.projimmo.entities.Maison;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaisonRepository extends JpaRepository<Maison, Long> {

    @Query("SELECT m FROM Maison m WHERE m.address = :adresse")
    List<Maison> findMaisonByAdresse(@Param("adresse") String adresse);

    @Query("SELECT m FROM Maison m WHERE m.area = :area")
    List<Maison> findMaisonByArea(@Param("area") Integer area);

    @Query("SELECT m FROM Maison m WHERE m.nbRoom = :nbRoom")
    List<Maison> findMaisonByNbRoom(@Param("nbRoom") Integer nbRoom);

    @Query("SELECT m FROM Maison m WHERE m.nbBedroom = :nbBedRoom")
    List<Maison> findMaisonByBedRoom(@Param("nbBedRoom") Integer nbBedRoom);

    @Query("SELECT m FROM Maison m WHERE m.nbToilet = :nbToilet")
    List<Maison> findMaisonByNbToilet(@Param("nbToilet") Integer nbToilet);

    @Query("SELECT m FROM Maison m WHERE m.price = :price")
    List<Maison> findMaisonByPrice(@Param("price") Integer price);

    Maison findMaisonByIdMaison(Long idMaison);
}