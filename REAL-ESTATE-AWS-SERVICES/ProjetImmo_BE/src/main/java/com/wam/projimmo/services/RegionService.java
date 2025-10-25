package com.wam.projimmo.services;

import com.wam.projimmo.entities.Region;
import com.wam.projimmo.repositories.RegionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {

    private final RegionRepository regionRepository;

    public RegionService(RegionRepository regionRepository) {
        this.regionRepository = regionRepository;
    }

    public List<Region> searchRegionById(Long id) {
        return regionRepository.findRegionById(id);
    }

    public List<Region> searchAllRegions() {
        return regionRepository.findAll();
    }

    public List<Region> searchRegionByName(String name) {
        return regionRepository.findRegionByName(name);
    }
}