package com.wam.projimmo.repositories;

import com.wam.projimmo.entities.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface RegionRepository extends JpaRepository<Region, Long> {

    @Query("SELECT r FROM Region r WHERE r.idRegion = :id")
    List<Region> findRegionById(@Param("id") Long id);

    @Query("SELECT r FROM Region r WHERE r.nameRegion = :name")
    List<Region> findRegionByName(@Param("name") String name);
}