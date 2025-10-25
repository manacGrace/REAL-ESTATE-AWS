package com.wam.projimmo.controller;

import com.wam.projimmo.entities.Region;
import com.wam.projimmo.services.RegionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/region")
@CrossOrigin
public class RegionController {

    private final RegionService regionService;

    public RegionController(RegionService regionService) {
        this.regionService = regionService;
    }

    @GetMapping("/getAll")
    public List<Region> getAllUsers() {
        return regionService.searchAllRegions();
    }

    @GetMapping("/getById/{id}")
    public List<Region> getRegionById(@PathVariable Long id) {
        return regionService.searchRegionById(id);
    }

    @GetMapping("/getByName/{name}")
    public List<Region> getRegionByName(@PathVariable String name) {
        return regionService.searchRegionByName(name);
    }
}